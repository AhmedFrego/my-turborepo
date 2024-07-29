// This object is not Partial<PickersLocaleText> because it is the default values

import { PickersLocaleText, PickerValidDate } from '@mui/x-date-pickers';
import { getPickersLocalization } from '@mui/x-date-pickers/locales/utils/getPickersLocalization';

const arPickers: PickersLocaleText<PickerValidDate> = {
	calendarViewSwitchingButtonAriaLabel: view =>
		view === 'year'
			? 'عرض العام مفتوح ، قم بالتبديل إلى عرض التقويم'
			: 'عرض التقويم مفتوح ، قم بالتبديل إلى عرض السنة',
	calendarWeekNumberAriaLabelText: weekNumber => `Week ${weekNumber}`,
	// Calendar labels
	calendarWeekNumberHeaderLabel: 'رقم الأسبوع',
	calendarWeekNumberHeaderText: '#',
	calendarWeekNumberText: weekNumber => `${weekNumber}`,
	// Action bar
	cancelButtonLabel: 'يلغي',
	clearButtonLabel: 'واضح',
	// Clock labels
	clockLabelText: (view, time, adapter) =>
		`يختار ${view}. ${
			time === null
				? 'لم يتم اختيار وقت'
				: `الوقت المحدد هو ${adapter.format(time, 'fullTime')}`
		}`,
	// Toolbar titles
	datePickerToolbarTitle: 'حدد تاريخ',
	dateRangePickerToolbarTitle: 'حدد نطاق التاريخ',
	dateTableLabel: 'تاريخ اختيار',
	dateTimePickerToolbarTitle: 'حدد التاريخ والوقت',
	day: 'يوم',
	empty: 'لا يوجد',
	end: 'نهاية',
	endDate: 'نهاية التاريخ',
	endTime: 'نهاية الوقت',
	fieldClearLabel: 'قيمة واضحة',
	fieldDayPlaceholder: () => 'DD',
	fieldHoursPlaceholder: () => 'hh',
	fieldMeridiemPlaceholder: () => 'aa',
	fieldMinutesPlaceholder: () => 'mm',
	fieldMonthPlaceholder: params =>
		params.contentType === 'letter' ? 'MMMM' : 'MM',
	fieldSecondsPlaceholder: () => 'ss',
	fieldWeekDayPlaceholder: params =>
		params.contentType === 'letter' ? 'EEEE' : 'EE',
	// Field section placeholders
	fieldYearPlaceholder: params => 'Y'.repeat(params.digitAmount),
	hours: 'ساعات',
	hoursClockNumberText: hours => `${hours} ساعات`,
	meridiem: 'صباحا/مساءا',
	minutes: 'دقائق',
	minutesClockNumberText: minutes => `${minutes} دقائق`,
	month: 'شهر',
	nextMonth: 'الشهر القادم',
	okButtonLabel: 'نعم',
	// Open picker labels
	openDatePickerDialogue: (value, utils) =>
		value !== null && utils.isValid(value)
			? `اختر التاريخ ، تاريخ المحدد هو ${utils.format(value, 'fullDate')}`
			: 'اختر موعدا',
	openNextView: 'افتح العرض التالي',
	// View navigation
	openPreviousView: 'فتح العرض السابق',
	openTimePickerDialogue: (value, utils) =>
		value !== null && utils.isValid(value)
			? `اختر الوقت ، الوقت المحدد ${utils.format(value, 'fullTime')}`
			: 'اختر الوقت',
	// Calendar navigation
	previousMonth: 'الشهر الماضى',
	seconds: 'ثوان',
	secondsClockNumberText: seconds => `${seconds} ثوان`,
	// Digital clock labels
	selectViewText: view => `يختار ${view}`,
	// DateRange placeholders
	start: 'يبدأ',
	startDate: 'تاريخ البدء',
	startTime: 'وقت البدء',
	timePickerToolbarTitle: 'حدد الوقت',
	// Table labels
	timeTableLabel: 'اختر وقت',
	todayButtonLabel: 'اليوم',
	weekDay: 'يوم الأسبوع',
	year: 'سنة',
};

export const ar = getPickersLocalization(arPickers);
