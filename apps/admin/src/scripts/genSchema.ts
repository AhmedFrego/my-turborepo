import inquirer from 'inquirer';
import { default as shell } from 'shelljs';

inquirer
	.prompt([
		{
			name: 'types',
			response: 'array',
		},
	])
	.then((answers: { types?: string }) => {
		if (answers.types?.length)
			for (const item of answers.types.split(/,\s*/)) {
				const path = `jsonSchemas/${item}.json`;

				const { code } = shell.exec(
					`typescript-json-schema ./tsconfig.json ${item} --ignoreErrors  -o ${path} --noExtraProps --propOrder`,
				);

				console.log(
					code === 0
						? `${item} generated in ${path}`
						: `Error with code ${code}`,
				);
			}
	})
	// eslint-disable-next-line unicorn/prefer-top-level-await
	.catch(error => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		if (error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
			console.error('TtyError:', error);
		} else {
			// Something else went wrong
			console.error(error);
		}
	});
