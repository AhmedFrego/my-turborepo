import { z } from 'zod';
import { makeZodI18nMap } from 'zod-i18n-map';

z.setErrorMap(makeZodI18nMap({ ns: 'translation' }));

export { z as zod } from 'zod';
