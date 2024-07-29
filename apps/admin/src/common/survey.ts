export interface HtmlConditionItem extends ExpressionItem {
	html?: string;
}

export interface Page extends PanelBase {
	description?: Translatable;
	maxTimeToFinish?: number;
	navigationButtonsVisibility?: 'hide' | 'inherit' | 'show';
	navigationDescription?: string;
	navigationTitle?: string;
	title?: Translatable;
}

export interface Checkbox extends CheckboxBase {
	itemComponent?: string;
	maxSelectedChoices?: number;
	selectAllText?: string;
	separateSpecialChoices?: boolean;
	showSelectAllItem?: boolean;
	type: 'checkbox';
	valuePropertyName?: string;
}

export interface CheckboxBase extends SelectBase {
	colCount?: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface SelectBase extends Question {
	choices?: ItemValue[];
	choicesEnableIf?: string;
	choicesFromQuestion?: string;
	choicesFromQuestionMode?: 'all' | 'selected' | 'unselected';
	choicesOrder?: 'asc' | 'desc' | 'none' | 'random';
	choicesVisibleIf?: string;
	hideIfChoicesEmpty?: boolean;
	noneText?: Translatable;
	otherErrorText?: Translatable;
	otherPlaceholder?: Translatable;
	otherText?: Translatable;
	separateSpecialChoices?: boolean;
	showNoneItem?: boolean;
	showOtherItem?: boolean;
	storeOthersAsComment?: 'default' | false | true;
}

export interface NumericValidator extends SurveyValidator {
	maxValue?: number;
	minValue?: number;
	type: 'number';
}

export interface TextValidator extends SurveyValidator {
	allowDigits?: boolean;
	maxLength?: number;
	minLength?: number;
	type: 'text';
}

export interface AnswerCountValidator extends SurveyValidator {
	maxCount?: number;
	minCount?: number;
}

export interface RegexValidator extends SurveyValidator {
	regex?: string;
	type: 'regex';
}

export interface EmailValidator extends SurveyValidator {
	type: 'email';
}

export interface ExpressionValidator extends SurveyValidator {
	expression?: string;
	type: 'expression';
}

export interface TagBox extends Omit<Checkbox, 'type'> {
	allowClear?: boolean;
	choicesLazyLoadEnabled?: boolean;
	choicesLazyLoadPageSize?: number;
	closeOnSelect?: boolean;
	hideSelectedItems?: boolean;
	itemComponent?: string;
	placeholder?: string;
	searchEnabled?: boolean;
	type: 'tagbox';
}

export interface Ranking extends Checkbox {
	itemComponent?: string;
	longTap?: string;
	maxSelectedChoices?: number;
	otherErrorText?: string;
	otherText?: Translatable;
	selectAllText?: string;
	separateSpecialChoices?: boolean;
	showSelectAllItem?: boolean;
}

export interface RadioGroup extends CheckboxBase {
	itemComponent?: string;
	showClearButton?: boolean;
	type: 'radiogroup';
}

export interface ImagePicker extends CheckboxBase {
	choices?: ImageItemValue[];
	colCount?: 0 | 1 | 2 | 3 | 4 | 5;
	contentMode?: 'image' | 'video';
	imageFit?: 'contain' | 'cover' | 'fill' | 'none';
	imageHeight?: number;
	imageWidth?: number;
	maxImageHeight?: string;
	maxImageWidth?: string;
	minImageHeight?: string;
	minImageWidth?: string;
	multiSelect?: boolean;
	noneText?: string;
	optionsCaption?: string;
	otherErrorText?: string;
	otherText?: string;
	showLabel?: boolean;
	type: 'image';
}

export interface ImageItemValue extends ItemValue {
	imageLink?: string;
}

export interface ButtonGroup extends CheckboxBase {
	choices?: ButtonGroupItemValue[];
	type: 'buttonGroup';
}

export interface ButtonGroupItemValue extends ItemValue {
	iconName?: string;
	iconSize?: number;
	showCaption?: boolean;
}

export interface Dropdown extends SelectBase {
	allowClear?: boolean;
	autocomplete?:
		| 'additional-name'
		| 'address-level1'
		| 'address-level2'
		| 'address-level3'
		| 'address-level4'
		| 'address-line1'
		| 'address-line2'
		| 'address-line3'
		| 'bday'
		| 'bday-day'
		| 'bday-month'
		| 'bday-year'
		| 'cc-additional-name'
		| 'cc-csc'
		| 'cc-exp'
		| 'cc-exp-month'
		| 'cc-exp-year'
		| 'cc-family-name'
		| 'cc-given-name'
		| 'cc-name'
		| 'cc-number'
		| 'cc-type'
		| 'country'
		| 'country-name'
		| 'current-password'
		| 'email'
		| 'family-name'
		| 'given-name'
		| 'honorific-prefix'
		| 'honorific-suffix'
		| 'impp'
		| 'language'
		| 'name'
		| 'new-password'
		| 'nickname'
		| 'organization'
		| 'organization-title'
		| 'photo'
		| 'postal-code'
		| 'sex'
		| 'street-address'
		| 'tel'
		| 'tel-area-code'
		| 'tel-country-code'
		| 'tel-extension'
		| 'tel-local'
		| 'tel-local-prefix'
		| 'tel-local-suffix'
		| 'tel-national'
		| 'transaction-amount'
		| 'transaction-currency'
		| 'url'
		| 'username';
	choicesLazyLoadEnabled?: boolean;
	choicesLazyLoadPageSize?: number;
	choicesMax?: number;
	choicesMin?: number;
	choicesStep?: number;
	inputFieldComponent?: string;
	itemComponent?: string;
	placeholder?: string;
	renderAs?: string;
	searchEnabled?: boolean;
	type: 'dropdown';
}

export interface MatrixDropdownBase extends MatrixBase {
	allowAdaptiveActions?: boolean;
	cellType?:
		| 'boolean'
		| 'checkbox'
		| 'comment'
		| 'dropdown'
		| 'expression'
		| 'radioGroup'
		| 'rating'
		| 'tagBox'
		| 'text';
	choices?: ItemValue[];
	columnColCount?: 0 | 1 | 2 | 3 | 4;
	columnLayout?: 'horizontal' | 'vertical';
	columnMinWidth?: string;
	columns?: MatrixDropdownColumn[];
	detailElements?: string;
	detailPanelMode?: 'none' | 'underRow' | 'underRowSingle';
	horizontalScroll?: boolean;
	keyDuplicationError?: string;
	placeholder?: string;
}

export interface MatrixBase extends Question {
	alternateRows?: boolean;
	columnMinWidth?: string;
	columnsVisibleIf?: string;
	rowsVisibleIf?: string;
	showHeader?: boolean;
	verticalAlign?: 'middle' | 'top';
}

export interface MatrixDropdown extends MatrixDropdownBase {
	hideIfRowsEmpty?: boolean;
	rows?: ItemValue[];
	rowsVisibleIf?: string;
	rowTitleWidth?: string;
	totalText?: string;
	type: 'matrixdropdown';
}

export interface MatrixDynamic extends MatrixDropdownBase {
	addRowLocation?: 'bottom' | 'default' | 'top' | 'topBottom';
	addRowText?: string;
	allowAddRows?: boolean;
	allowRemoveRows?: boolean;
	allowRowsDragAndDrop?: string;
	confirmDelete?: boolean;
	confirmDeleteText?: string;
	defaultRowValue?: string;
	defaultValueFromLastRow?: boolean;
	detailPanelShowOnAdding?: boolean;
	emptyRowsText?: string;
	hideColumnsIfEmpty?: boolean;
	keyName?: string;
	maxRowCount?: number;
	minRowCount?: number;
	removeRowText?: string;
	rowCount?: number;
	rowsVisibleIf?: string;
	type: 'matrixdynamic';
}

export interface Matrix extends MatrixBase {
	cells?: string;
	columns?: ItemValue[];
	hideIfRowsEmpty?: boolean;
	isAllRowRequired?: boolean;
	rows?: ItemValue[];
	rowsOrder?: 'initial' | 'random';
	rowTitleWidth?: string;
}

export interface Expression extends Question {
	correctAnswer?: string;
	currency?: Currency;
	defaultValue?: string;
	defaultValueExpression?: string;
	displayStyle?: 'currency' | 'date' | 'decimal' | 'none' | 'percent';
	enableIf?: string;
	expression?: string;
	format?: string;
	maximumFractionDigits?: number;
	minimumFractionDigits?: number;
	readOnly?: string;
	requiredErrorText?: Translatable;
	requiredIf?: string;
	type: 'expression';
	useGrouping?: boolean;
}

export interface TextBase extends Question {}

export interface Text extends TextBase {
	autocomplete?:
		| 'additional-name'
		| 'address-level1'
		| 'address-level2'
		| 'address-level3'
		| 'address-level4'
		| 'address-line1'
		| 'address-line2'
		| 'address-line3'
		| 'bday'
		| 'bday-day'
		| 'bday-month'
		| 'bday-year'
		| 'cc-additional-name'
		| 'cc-csc'
		| 'cc-exp'
		| 'cc-exp-month'
		| 'cc-exp-year'
		| 'cc-family-name'
		| 'cc-given-name'
		| 'cc-name'
		| 'cc-number'
		| 'cc-type'
		| 'country'
		| 'country-name'
		| 'current-password'
		| 'email'
		| 'family-name'
		| 'given-name'
		| 'honorific-prefix'
		| 'honorific-suffix'
		| 'impp'
		| 'language'
		| 'name'
		| 'new-password'
		| 'nickname'
		| 'organization'
		| 'organization-title'
		| 'photo'
		| 'postal-code'
		| 'sex'
		| 'street-address'
		| 'tel'
		| 'tel-area-code'
		| 'tel-country-code'
		| 'tel-extension'
		| 'tel-local'
		| 'tel-local-prefix'
		| 'tel-local-suffix'
		| 'tel-national'
		| 'transaction-amount'
		| 'transaction-currency'
		| 'url'
		| 'username';
	dataList?: string[];
	inputType?:
		| 'color'
		| 'date'
		| 'datetime'
		| 'datetime-local'
		| 'email'
		| 'month'
		| 'number'
		| 'password'
		| 'range'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week';
	max?: number;
	maxErrorText?: string;
	maxLength?: number;
	maxValueExpression?: string;
	min?: number;
	minErrorText?: string;
	minValueExpression?: string;
	placeholder?: string;
	size?: number;
	step?: number;
	textUpdateMode?: 'default' | 'onBlur' | 'onTyping';
	type: 'text';
}

export interface Comment extends TextBase {
	acceptCarriageReturn?: boolean;
	autoGrow?: boolean;
	cols?: number;
	maxLength?: number;
	placeholder?: string;
	rows?: number;
	textUpdateMode?: 'default' | 'onBlur' | 'onTyping';
	type: 'comment';
}

export interface MultipleText extends Question {
	colCount?: 1 | 2 | 3 | 4 | 5;
	items?: MultipleTextItem[];
	itemSize?: number;
	type: 'multipletext';
}

export interface NonValue extends Question {
	correctAnswer?: string;
	defaultValue?: string;
	description?: Translatable;
	enableIf?: string;
	readOnly?: string;
	requiredErrorText?: string;
	requiredIf?: string;
	title?: Translatable;
	type: 'nonvalue';
	valueName?: string;
}

export interface Html extends NonValue {
	html?: string;
}

export interface Image extends NonValue {
	altText?: string;
	contentMode?: 'auto' | 'image' | 'video' | 'youtube';
	imageFit?: 'contain' | 'cover' | 'fill' | 'none';
	imageHeight?: string;
	imageLink?: string;
	imageWidth?: string;
}

export interface Empty extends Question {
	type: 'empty';
}

export interface File extends Question {
	acceptedTypes?: string;
	allowImagesPreview?: boolean;
	allowMultiple?: boolean;
	correctAnswer?: string;
	defaultValue?: string;
	imageHeight?: string;
	imageWidth?: string;
	maxSize?: number;
	needConfirmRemoveFile?: boolean;
	showPreview?: boolean;
	storeDataAsText?: boolean;
	type: 'file';
	waitForUpload?: boolean;
}

export interface Rating extends Question {
	displayMode?: 'auto' | 'buttons' | 'dropdown';
	displayRateDescriptionsAsExtremeItems?: boolean;
	maxRateDescription?: string;
	minRateDescription?: string;
	rateMax?: number;
	rateMin?: number;
	rateStep?: number;
	rateType?: 'labels' | 'numbers' | 'smileys' | 'stars';
	rateValues?: ItemValue[];
	type: 'rating';
}

export interface Boolean extends Question {
	label?: string;
	labelFalse?: string;
	labelTrue?: string;
	renderAs?: string;
	type: 'boolean';
	valueFalse?: string;
	valueTrue?: string;
}

export interface SignaturePad extends Question {
	allowClear?: boolean;
	backgroundColor?: string;
	correctAnswer?: string;
	dataFormat?:
		| { text: 'JPEG'; value: 'image/jpeg' }
		| { text: 'PNG'; value: 'png' }
		| { text: 'SVG'; value: 'image/svg+xml' };
	defaultValue?: string;
	height?: number;
	penColor?: string;
	signatureHeight?: number;

	signatureWidth?: number;
	type: 'signaturepad';
}

export interface PanelDynamic extends Question {
	allowAddPanel?: boolean;
	allowRemovePanel?: boolean;
	confirmDelete?: boolean;
	confirmDeleteText?: string;
	defaultPanelValue?: string;
	defaultValueFromLastPanel?: boolean;
	keyDuplicationError?: string;
	keyName?: string;
	maxPanelCount?: number;
	minPanelCount?: number;
	minWidth?: string;
	noEntriesText?: string;
	panelAddText?: string;
	panelCount?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
	panelNextText?: string;
	panelPrevText?: string;
	panelRemoveButtonLocation?: 'bottom' | 'right';
	panelRemoveText?: string;
	panelsState?: 'collapsed' | 'default' | 'expanded' | 'firstExpanded';
	renderMode?: 'list' | 'progressBottom' | 'progressTop' | 'progressTopBottom';
	showQuestionNumbers?: 'off' | 'onPanel' | 'onSurvey';
	showRangeInProgress?: boolean;
	templateDescription?: string;
	templateElements?: (
		| boolean
		| ButtonGroup
		| Checkbox
		| Comment
		| Dropdown
		| Empty
		| Expression
		| File
		| Html
		| Image
		| ImagePicker
		| Matrix
		| MatrixDropdown
		| MatrixDropdownBase
		| MatrixDynamic
		| MultipleText
		| NonValue
		| Panel
		| PanelDynamic
		| RadioGroup
		| Ranking
		| Rating
		| SignaturePad
		| TagBox
		| Text
		| TextBase
	)[];
	templateTitle?: string;
	templateTitleLocation?: 'bottom' | 'default' | 'left' | 'top';
	type: 'panelDynamic';
}

export interface Panel extends PanelBase {
	allowAdaptiveActions?: boolean;
	indent?: 0 | 1 | 2 | 3;
	innerIndent?: 0 | 1 | 2 | 3;
	isRequired?: string;
	maxWidth?: string;
	minWidth?: string;
	page?: string;
	questionStartIndex?: string;
	requiredErrorText?: string;
	showNumber?: boolean;
	showQuestionNumbers?: 'default' | 'off' | 'onpanel';
	startWithNewLine?: boolean;
	state?: 'collapsed' | 'default' | 'expanded';
	type: 'panel';
	width?: string;
}

export interface VisibleTrigger extends SurveyTrigger {
	pages?: string;
	questions?: string;
}

export interface SurveyTrigger extends Trigger {
	name?: string;
}

export interface CompleteTrigger extends SurveyTrigger {}

export interface SetValueTrigger extends SurveyTrigger {
	isVariable?: boolean;
	setToName?: string;
	setValue?: string;
}

export interface CopyValueTrigger extends SurveyTrigger {
	fromName?: string;
	setToName?: string;
}

export interface SkipTrigger extends SurveyTrigger {
	gotoName?: string;
}

export interface RunExpressionTrigger extends SurveyTrigger {
	runExpression?: string;
	setToName?: string;
}

export interface UrlConditionItem extends ExpressionItem {
	url?: string;
}

export type Translatable = Record<string, string> | string;

export interface SurveyJSLibraryJsonSchema {
	autoGrowComment?: boolean;
	calculatedValues?: CalculatedValue[];
	checkErrorsMode?:
		| 'onComplete'
		| 'onNextPage'
		| 'onValueChanged'
		| 'onValueChanging';
	clearInvisibleValues?:
		| 'none'
		| 'onComplete'
		| 'onHidden'
		| 'onHiddenContainer';
	completedBeforeHtml?: string;
	completedHtml?: string;
	completedHtmlOnCondition?: HtmlConditionItem[];
	completeText?: Translatable;
	cookieName?: string;
	description?: Translatable;
	editText?: string;
	firstPageIsStarted?: boolean;
	focusFirstQuestionAutomatic?: boolean;
	focusOnFirstError?: boolean;
	goNextPageAutomatic?: boolean;
	isSinglePage?: boolean;
	loadingHtml?: string;
	locale?: string;
	logo?: string;
	logoFit?: 'contain' | 'cover' | 'fill' | 'none';
	logoHeight?: string;
	logoPosition?: 'bottom' | 'left' | 'none' | 'right' | 'top';
	logoWidth?: string;
	maxOthersLength?: number;
	maxTextLength?: number;
	maxTimeToFinish?: number;
	maxTimeToFinishPage?: number;
	mode?: 'display' | 'edit';
	navigateToUrl?: string;
	navigateToUrlOnCondition?: UrlConditionItem[];
	pageNextText?: string;
	pagePrevText?: string;
	pages?: Page[];
	previewText?: string;
	progressBarType?:
		| 'buttons'
		| 'correctQuestions'
		| 'pages'
		| 'questions'
		| 'requiredQuestions';
	questionDescriptionLocation?: 'underInput' | 'underTitle';
	questionErrorLocation?: 'bottom' | 'top';
	questions?: (
		| boolean
		| ButtonGroup
		| Checkbox
		| Comment
		| Dropdown
		| Empty
		| Expression
		| File
		| Html
		| Image
		| ImagePicker
		| Matrix
		| MatrixDropdown
		| MatrixDropdownBase
		| MatrixDynamic
		| MultipleText
		| NonValue
		| Panel
		| PanelDynamic
		| RadioGroup
		| Ranking
		| Rating
		| SignaturePad
		| TagBox
		| Text
		| TextBase
	)[];
	questionsOnPageMode?: 'questionPerPage' | 'singlePage' | 'standard';
	questionsOrder?: 'initial' | 'random';
	questionStartIndex?: string;
	questionTitleLocation?: 'bottom' | 'left' | 'top';
	questionTitlePattern?: string;
	questionTitleTemplate?: string;
	requiredText?: string;
	sendResultOnPageNext?: boolean;
	showBrandInfo?: boolean;
	showCompletedPage?: boolean;
	showNavigationButtons?: 'both' | 'bottom' | 'none' | 'top';
	showPageNumbers?: boolean;
	showPageTitles?: boolean;
	showPrevButton?: boolean;
	showPreviewBeforeComplete?:
		| 'noPreview'
		| 'showAllQuestions'
		| 'showAnsweredQuestions';
	showProgressBar?: 'both' | 'bottom' | 'off' | 'top';
	showQuestionNumbers?: 'off' | 'on' | 'onPage';
	showTimerPanel?: 'bottom' | 'none' | 'top';
	showTimerPanelMode?: 'all' | 'page' | 'survey';
	showTitle?: boolean;
	showTOC?: boolean;
	startSurveyText?: string;
	storeOthersAsComment?: boolean;
	surveyId?: string;
	surveyPostId?: string;
	surveyShowDataSaving?: boolean;
	textUpdateMode?: 'onBlur' | 'onTyping';
	title?: Translatable;
	tocLocation?: 'left' | 'right';
	triggers?: (
		| CompleteTrigger
		| CopyValueTrigger
		| RunExpressionTrigger
		| SetValueTrigger
		| SkipTrigger
		| VisibleTrigger
	)[];
	width?: string;
	widthMode?: 'auto' | 'responsive' | 'static';
}

export interface ExpressionItem {
	expression?: string;
}

export interface PanelBase {
	description?: Translatable;
	elements?: (
		| boolean
		| ButtonGroup
		| Checkbox
		| Comment
		| Dropdown
		| Empty
		| Expression
		| File
		| Html
		| Image
		| ImagePicker
		| Matrix
		| MatrixDropdown
		| MatrixDropdownBase
		| MatrixDynamic
		| MultipleText
		| NonValue
		| Panel
		| PanelDynamic
		| RadioGroup
		| Ranking
		| Rating
		| SignaturePad
		| TagBox
		| Text
		| TextBase
	)[];
	enableIf?: string;
	name?: string;
	questionsOrder?: 'default' | 'initial' | 'random';
	questionTitleLocation?: 'bottom' | 'default' | 'hidden' | 'left' | 'top';
	readOnly?: boolean;
	requiredIf?: string;
	title?: Translatable;
	visible?: string;
	visibleIf?: string;
}

export interface Question {
	bindings?: string;
	clearIfInvisible?: 'default' | 'none' | 'onComplete' | 'onHidden';
	commentPlaceholder?: string;
	commentText?: Translatable;
	correctAnswer?: string;
	defaultValue?: string;
	defaultValueExpression?: string;
	description?: Translatable;
	descriptionLocation?: 'default' | 'underInput' | 'underTitle';
	enableIf?: string;
	hideNumber?: boolean;
	indent?: 0 | 1 | 2 | 3;
	isRequired?: boolean;
	maxWidth?: string;
	minWidth?: string;
	name?: string;
	page?: string;
	readOnly?: string;
	renderAs?: string;
	requiredErrorText?: Translatable;
	requiredIf?: string;
	showCommentArea?: boolean;
	startWithNewLine?: boolean;
	state?: 'collapsed' | 'default' | 'expanded';
	title?: Translatable;
	titleLocation?: 'bottom' | 'default' | 'hidden' | 'left' | 'top';
	useDisplayValuesInDynamicTexts?: boolean;
	validators?: (
		| AnswerCountValidator
		| EmailValidator
		| ExpressionValidator
		| NumericValidator
		| RegexValidator
		| TextValidator
	)[];
	valueName?: string;
	visible?: string;
	visibleIf?: string;
	width?: string;
}

export interface SurveyValidator {
	text?: Translatable;
}

export interface ItemValue {
	enableIf?: string;
	text?: Translatable;
	value?: string;
	visibleIf?: string;
}

export interface MatrixDropdownColumn {
	cellHint?: string;
	cellType?:
		| 'boolean'
		| 'checkbox'
		| 'comment'
		| 'default'
		| 'dropdown'
		| 'expression'
		| 'radioGroup'
		| 'rating'
		| 'tagBox'
		| 'text';
	colCount?: -1 | 0 | 1 | 2 | 3 | 4;
	enableIf?: string;
	isRequired?: boolean;
	isUnique?: boolean;
	minWidth?: string;
	name?: string;
	readOnly?: boolean;
	renderAs?: string;
	requiredErrorText?: Translatable;
	requiredIf?: string;
	showInMultipleColumns?: boolean;
	title?: Translatable;
	totalCurrency?: Currency;
	totalDisplayStyle?: 'currency' | 'decimal' | 'none' | 'percent';
	totalExpression?: string;
	totalFormat?: string;
	totalMaximumFractionDigits?: number;
	totalMinimumFractionDigits?: number;
	totalType?: 'avg' | 'count' | 'max' | 'min' | 'none' | 'sum';
	validators?: (
		| AnswerCountValidator
		| EmailValidator
		| ExpressionValidator
		| NumericValidator
		| RegexValidator
		| TextValidator
	)[];
	visibleIf?: string;
	width?: string;
}

export interface MultipleTextItem {
	inputType?:
		| 'color'
		| 'date'
		| 'datetime'
		| 'datetime-local'
		| 'email'
		| 'month'
		| 'number'
		| 'password'
		| 'range'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week';
	isRequired?: boolean;
	maxLength?: number;
	name?: string;
	placeholder?: string;
	requiredErrorText?: Translatable;
	size?: number;
	title?: Translatable;
	validators?: (
		| AnswerCountValidator
		| EmailValidator
		| ExpressionValidator
		| NumericValidator
		| RegexValidator
		| TextValidator
	)[];
}

export interface Trigger {
	expression?: string;
	operator?: string;
	value?: string;
}

export interface CalculatedValue {
	expression?: string;
	includeIntoResult?: boolean;
	name?: string;
}

export type Currency =
	| 'AED'
	| 'AFN'
	| 'ALL'
	| 'AMD'
	| 'ANG'
	| 'AOA'
	| 'ARS'
	| 'AUD'
	| 'AWG'
	| 'AZN'
	| 'BAM'
	| 'BBD'
	| 'BDT'
	| 'BGN'
	| 'BHD'
	| 'BIF'
	| 'BMD'
	| 'BND'
	| 'BOB'
	| 'BOV'
	| 'BRL'
	| 'BSD'
	| 'BTN'
	| 'BWP'
	| 'BYN'
	| 'BZD'
	| 'CAD'
	| 'CDF'
	| 'CHE'
	| 'CHF'
	| 'CHW'
	| 'CLF'
	| 'CLP'
	| 'CNY'
	| 'COP'
	| 'COU'
	| 'CRC'
	| 'CUC'
	| 'CUP'
	| 'CVE'
	| 'CZK'
	| 'DJF'
	| 'DKK'
	| 'DOP'
	| 'DZD'
	| 'EGP'
	| 'ERN'
	| 'ETB'
	| 'EUR'
	| 'FJD'
	| 'FKP'
	| 'GBP'
	| 'GEL'
	| 'GHS'
	| 'GIP'
	| 'GMD'
	| 'GNF'
	| 'GTQ'
	| 'GYD'
	| 'HKD'
	| 'HNL'
	| 'HRK'
	| 'HTG'
	| 'HUF'
	| 'IDR'
	| 'ILS'
	| 'INR'
	| 'IQD'
	| 'IRR'
	| 'ISK'
	| 'JMD'
	| 'JOD'
	| 'JPY'
	| 'KES'
	| 'KGS'
	| 'KHR'
	| 'KMF'
	| 'KPW'
	| 'KRW'
	| 'KWD'
	| 'KYD'
	| 'KZT'
	| 'LAK'
	| 'LBP'
	| 'LKR'
	| 'LRD'
	| 'LSL'
	| 'LYD'
	| 'MAD'
	| 'MDL'
	| 'MGA'
	| 'MKD'
	| 'MMK'
	| 'MNT'
	| 'MOP'
	| 'MRO'
	| 'MUR'
	| 'MVR'
	| 'MWK'
	| 'MXN'
	| 'MXV'
	| 'MYR'
	| 'MZN'
	| 'NAD'
	| 'NGN'
	| 'NIO'
	| 'NOK'
	| 'NPR'
	| 'NZD'
	| 'OMR'
	| 'PAB'
	| 'PEN'
	| 'PGK'
	| 'PHP'
	| 'PKR'
	| 'PLN'
	| 'PYG'
	| 'QAR'
	| 'RON'
	| 'RSD'
	| 'RUB'
	| 'RWF'
	| 'SAR'
	| 'SBD'
	| 'SCR'
	| 'SDG'
	| 'SEK'
	| 'SGD'
	| 'SHP'
	| 'SLL'
	| 'SOS'
	| 'SRD'
	| 'SSP'
	| 'STD'
	| 'SVC'
	| 'SYP'
	| 'SZL'
	| 'THB'
	| 'TJS'
	| 'TMT'
	| 'TND'
	| 'TOP'
	| 'TRY'
	| 'TTD'
	| 'TWD'
	| 'TZS'
	| 'UAH'
	| 'UGX'
	| 'USD'
	| 'USN'
	| 'UYI'
	| 'UYU'
	| 'UZS'
	| 'VEF'
	| 'VND'
	| 'VUV'
	| 'WST'
	| 'XAF'
	| 'XAG'
	| 'XAU'
	| 'XBA'
	| 'XBB'
	| 'XBC'
	| 'XBD'
	| 'XCD'
	| 'XDR'
	| 'XOF'
	| 'XPD'
	| 'XPF'
	| 'XPT'
	| 'XSU'
	| 'XTS'
	| 'XUA'
	| 'XXX'
	| 'YER'
	| 'ZAR'
	| 'ZMW'
	| 'ZWL';
