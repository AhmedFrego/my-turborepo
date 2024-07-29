export const arNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

const _removeSpaces = (text: string) => text.replaceAll(/\s/g, '');

export const _getDigits = (plateNumber: string) =>
	_removeSpaces(plateNumber)
		.match(/\d+|[٠-٩]/g)
		?.join('') ?? '';

const _getLetters = (plateNumber: string) =>
	_removeSpaces(plateNumber).replaceAll(/\d+|[٠-٩]/g, '');

export const getEnLetters = (plateNumber: string) => {
	const letters = _getLetters(plateNumber);
	const englishRegex = /^[A-Za-z]+$/;

	if (englishRegex.test(letters)) {
		return letters.toUpperCase().replaceAll(/\s/g, '');
	}

	const stringBuilder: string[] = [];

	for (const letterIt of letters) {
		if (letterIt === 'ـ') {
			continue;
		}

		const value = {
			ا: 'A',
			ب: 'B',
			ح: 'J',
			د: 'D',
			ر: 'R',
			س: 'S',
			ص: 'X',
			ط: 'T',
			ع: 'E',
			ق: 'G',
			ك: 'K',
			ل: 'L',
			م: 'Z',
			ن: 'N',
			ه: 'H', // Ar representation should be 'هـ'
			و: 'U',
			ى: 'V',
		}[letterIt];

		if (value === undefined) {
			throw new Error(`Invalid letter ${letterIt}`);
		}
		stringBuilder.push(value);
	}

	return stringBuilder.reverse().join('');
};

// eslint-disable-next-line sonarjs/cognitive-complexity
export const getArLetters = (plateNumber: string) => {
	const letters = _getLetters(plateNumber).toUpperCase();
	const englishRegex = /^[A-Za-z]+$/;

	if (englishRegex.test(letters)) {
		const stringBuilder = [];

		for (const letterIt of letters) {
			let value: string | undefined = '';

			if (letterIt === 'H') {
				value += 'ـ';
			}

			value = {
				A: 'ا',
				B: 'ب',
				D: 'د',
				E: 'ع',
				G: 'ق',
				H: 'هـ',
				J: 'ح',
				K: 'ك',
				L: 'ل',
				N: 'ن',
				R: 'ر',
				S: 'س',
				T: 'ط',
				U: 'و',
				V: 'ى',
				X: 'ص',
				Z: 'م',
			}[letterIt];

			if (value === undefined || value === 'ـ') {
				throw new Error(`Invalid letter ${letterIt}`);
			}
			stringBuilder.push(value);
		}

		return stringBuilder.reverse().join(' ');
	}

	const stringBuilder = [];

	for (const letterIt of letters) {
		if (letterIt === 'ـ') {
			continue;
		}
		if (letterIt === 'ه') {
			stringBuilder.push('هـ');
		} else {
			stringBuilder.push(letterIt);
		}
	}

	return stringBuilder.join(' ');
};

export const getArNumbers = (plateNumber: string) => {
	const arNumberRegex = /^[٠-٩]+$/;
	const digits = _getDigits(plateNumber);

	if (arNumberRegex.test(digits)) {
		return [...digits.replaceAll(/\s/g, '')].join(' ');
	}

	const stringBuilder: string[] = [];

	for (const itt of digits) {
		if (arNumbers[Number(itt)] === undefined) {
			throw new Error(`Invalid number format at ${itt}`);
		}
		stringBuilder.push(arNumbers[Number(itt)]);
	}

	return stringBuilder.join(' ');
};

export const getEnNumbers = (plateNumber: string) => {
	const arNumberRegex = /^[٠-٩]+$/;
	const numbers = _getDigits(plateNumber);

	if (arNumberRegex.test(numbers)) {
		const stringBuilder = [];

		for (const itt of numbers) {
			const value = arNumbers.indexOf(itt);

			if (value === undefined) {
				throw new Error(`Invalid number format at ${itt}`);
			}
			stringBuilder.push(value);
		}

		return stringBuilder.join(' ');
	}

	return [...numbers.replaceAll(/\s/g, '')].join(' ');
};
