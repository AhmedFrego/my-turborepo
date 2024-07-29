import { EnterpriseMessages } from 'src/locales';

export const enterpriseMessages: EnterpriseMessages = {
	'ra-form-layout': {
		action: {
			bulk_update: 'Actualizar {{resource}}',
			next: 'Próxima',
			previous: 'Anterior',
		},
		autosave: {
			error: 'Error del servidor, los cambios no se guardan: {{error}}',
			last_saved_at: 'Todos los cambios guardados',
			saving: 'Ahorro...',
		},
		filters: {
			apply_filters: 'Aplicar',
			filters_button_label: 'Filtros',
			operator: 'Operadora',
			operators: {
				boolean: 'Es verdad',
				eq: 'Iguales',
				eq_any: 'Es igual a cualquier',
				gt: 'Mas grande que',
				inc: 'Incluir',
				inc_any: 'Incluye cualquier',
				lt: 'Menos que',
				neq: 'No es igual',
				neq_any: 'No equivale a ninguno',
				ninc_any: 'No incluye ninguno',
				q: 'Contiene',
			},
			remove_all_filters: 'Eliminar todos los filtros',
			source: 'Fuente',
			value: 'Valor',
		},
		input_selector_form: {
			select_inputs: 'Seleccionar campos',
			select_values: 'Seleccionar valores',
		},
	},
	'ra-relationships': {
		duallistinput: {
			availableItems: 'Objetos disponibles',
			select: 'Seleccionar',
			selectedItems: 'Artículos seleccionados',
			unselect: 'Deseleccionar',
		},
		referenceManyInput: {
			fetchError: 'Error al obtener referencias',
			saveError: 'Error del servidor: sus cambios no se guardaron por completo',
		},
	},
};
