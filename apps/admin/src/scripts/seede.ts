import { faker } from '@faker-js/faker';
import { addYears, subYears } from 'date-fns';

const seed = () => {
	for (const _ of Array.from({ length: 100 })) {
		const minAge = 18;
		const maxAge = 60;

		const date_of_birth = faker.date.between({
			from: subYears(new Date(), maxAge),
			to: subYears(new Date(), minAge),
		});

		const minHiringYear = addYears(date_of_birth, 18);

		const date_of_hiring = faker.date.between({
			from: minHiringYear,
			to: new Date(),
		});

		console.log({ date_of_birth, date_of_hiring });
	}
};

seed();
