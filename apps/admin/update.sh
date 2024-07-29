#!/bin/bash

SOURCE_DIR="../../node_modules/@react-admin"
DEST_DIR="./src/@react-admin"

# Create the destination directory if it doesn't exist
mkdir -p "$DEST_DIR"

# Function to recursively copy files and folders excluding 'esm', 'lib',
# and files with specific extensions
function copy_files {
    for item in "$1"/*; do
        item_name=$(basename "$item")

        # Check if the file has one of the excluded extensions
        if [[ "$item_name" == *.stories.tsx || "$item_name" == *.spec.ts || "$item_name" == *.spec.tsx ]]; then
            continue # Skip copying this file
        fi

        # Exclude directories 'esm', 'lib', and 'node_modules'
        if [[ "$item_name" != "esm" && "$item_name" != "lib" && "$item_name" != "node_modules" && "$item_name" != "package.json" ]]; then
            if [[ -d "$item" ]]; then
                mkdir -p "$2/$item_name"
                copy_files "$item" "$2/$item_name"
            elif [[ -f "$item" ]]; then
                cp "$item" "$2/"
            fi
        fi
    done
}

# Create an index.ts file that exports everything from src
function create_index_file {
    echo "Creating index.ts for $1..."
    local package_src_dir="$1/src"
    local index_file="$1/index.ts"

    if [[ -d "$package_src_dir" ]]; then
        # Check if src directory exists and create an index.ts file
        echo "export * from './src';" >"$index_file"
    fi
}

# Iterate through each package directory in the source structure
for package_dir in "$SOURCE_DIR"/*; do
    if [[ -d "$package_dir" ]]; then
        package_name=$(basename "$package_dir")

        echo "Copying files from $package_name..."

        # Create the package directory in the destination structure
        mkdir -p "$DEST_DIR/$package_name"

        # Call the copy_files function to copy files excluding 'esm', 'lib', and specified file extensions
        copy_files "$package_dir" "$DEST_DIR/$package_name"

        # Create index.ts file
        create_index_file "$DEST_DIR/$package_name"

        echo "Files from $package_name copied to $DEST_DIR/$package_name"
    fi
done

echo "Done!"
