export const easternToWesternNumbers = (numbers: string) =>
	numbers.replaceAll(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d).toString());

export const isNumeric = <T>(text: T) => {
	if (typeof text !== 'string') {
		return false;
	}

	return [...text].every((char: string) => '0123456789'.includes(char));
};

const evaluateDigit = (currentDigit: number) => {
	if (currentDigit < 5) {
		return currentDigit * 2;
	}
	const sum = (currentDigit * 2).toString();

	return Number(sum[0]) + Number(sum[1]);
};

export const isValidSaudiID = (saudiID: number | string) => {
	const stringID = easternToWesternNumbers(saudiID.toString()).trim();

	if (
		stringID.length !== 10 ||
		!isNumeric(stringID) ||
		!'12'.includes(stringID[0])
	) {
		return false;
	}

	let sum = 0;

	for (const [index, element] of [...stringID].entries()) {
		sum += index % 2 === 0 ? evaluateDigit(Number(element)) : Number(element);
	}

	return sum % 10 === 0;
};
