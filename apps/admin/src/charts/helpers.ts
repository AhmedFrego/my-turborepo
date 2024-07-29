import { differenceInYears } from 'date-fns';

export const calculateAge = (birthDate?: null | string) => {
	if (!birthDate) return 0;

	const today = new Date();
	const birth = new Date(birthDate);

	return differenceInYears(today, birth);
};

export const ageCategories = [
	'-20',
	'20:30',
	'30:40',
	'40:50',
	'50:60',
	'60+',
	'unknown',
];

// Function to categorize age
export const categorizeAge = (age: number) => {
	if (age < 20) return '-20';
	if (age >= 20 && age < 30) return '20:30';
	if (age >= 30 && age < 40) return '30:40';
	if (age >= 40 && age < 50) return '40:50';
	if (age >= 50 && age < 60) return '50:60';
	if (age >= 60) return '60+';

	return 'unknown';
};

export const getMonthName = (
	index: number,
	locale: Intl.LocalesArgument = 'en',
) => {
	const objectDate = new Date();

	objectDate.setDate(1);
	objectDate.setMonth(index - 1);

	return objectDate.toLocaleString(locale, { month: 'short' });
};
