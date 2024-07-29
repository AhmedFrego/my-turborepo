import { EnterpriseMessages } from 'src/locales';

export const enterpriseMessages: EnterpriseMessages = {
	'ra-form-layout': {
		action: {
			bulk_update: 'Mettre à jour sélectionné {{resource}}',
			next: 'Suivante',
			previous: 'Précédente',
		},
		autosave: {
			error:
				'Erreur du serveur, les modifications ne sont pas enregistrées: {{error}}',
			last_saved_at: 'Tous les modifications enregistrées',
			saving: 'Économie...',
		},
		filters: {
			apply_filters: 'Appliquer',
			filters_button_label: 'Filtres',
			operator: 'Opératrice',
			operators: {
				boolean: 'Est vrai',
				eq: 'Équivaut à',
				eq_any: 'Égal à tout',
				gt: 'Plus grand que',
				inc: 'Comprend',
				inc_any: 'Comprend tout',
				lt: 'Moins que',
				neq: 'Pas égaux',
				neq_any: 'Pas égal à aucun',
				ninc_any: "N'en comprend aucun",
				q: 'Contient',
			},
			remove_all_filters: 'Supprimer tous les filtres',
			source: 'source',
			value: 'Valeur',
		},
		input_selector_form: {
			select_inputs: 'Sélectionner les champs',
			select_values: 'Sélectionner les valeurs',
		},
	},
	'ra-relationships': {
		duallistinput: {
			availableItems: 'Articles disponibles',
			select: 'Sélectionner',
			selectedItems: 'Articles sélectionnés',
			unselect: 'Non sécurisé',
		},
		referenceManyInput: {
			fetchError: 'Erreur récupérer les références',
			saveError:
				"Erreur du serveur: vos modifications n'ont pas été complètement enregistrées",
		},
	},
};
