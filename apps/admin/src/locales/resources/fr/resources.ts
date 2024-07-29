/* eslint-disable sonarjs/no-duplicate-string */
import { ResourcesMessages } from 'src/locales';

export const resourceMessages: ResourcesMessages = {
	resources: {
		addresses: {
			fields: {
				building: 'Bâtiment',
				city_id: 'Ville',
				country_id: 'Pays',
				street: 'Rue',
			},
			name_one: 'Address',
			name_other: 'Addresses',
		},
		base_call_for_action: {
			fields: {
				notes: 'Remarques',
				title: 'Titre',
			},
			name_one: 'Call For Action',
			name_other: 'Call For Actions',
		},
		base_complaints: {
			fields: {
				title: 'Titre',
			},
			name_one: 'Base Complaint',
			name_other: 'Base Complaints',
		},
		base_proposals: {
			fields: {
				title: 'Titre',
			},
			name_one: 'Base Proposal',
			name_other: 'Base Proposals',
		},
		base_requests: {
			fields: {
				status: 'Statut de demande',
				title: 'Titre',
			},
			name_one: 'Base Request',
			name_other: 'Base Requests',
		},
		certifications: {
			fields: {
				credential_number: "Numéro d'identification",
				credential_url: "URL d'identification",
				date_of_expiry: "Date d'expiration",
				date_of_issue: "Date d'émission",
				employee_id: 'Compte',
				issuing_organization: 'Organisation de délivrance',
				level: 'Niveau',
				name: 'Nom',
				specialization: 'Spécialisation',
			},
			name_one: 'Certification',
			name_other: 'Certifications',
		},
		complaints: {
			fields: {
				description: 'description',
			},
			name_one: 'Complaint',
			name_other: 'Complaints',
		},
		contact_information: {
			fields: {},
			name_one: 'Contact Information',
			name_other: 'Contact Informations',
		},
		contracts: {
			fields: {
				benefits: 'Avantages',
				duties: 'Devoirs',
				job_title_id: 'ID de titre du poste',
				probation_period: 'Période de probation',
				responsibilities: 'Responsabilités',
				salary: 'Salaire',
			},
			name_one: 'Contract',
			name_other: 'Contracts',
		},
		deductions: {
			fields: {},
			name_one: 'Deduction',
			name_other: 'Deductions',
		},
		departments: {
			fields: {},
			name_one: 'Department',
			name_other: 'Departments',
		},
		driver_licenses: {
			fields: {
				blood_type_id: 'Groupe sanguin',
				date_of_expiry: "Date d'expiration",
				date_of_issue: "Date d'émission",
				employee_id: 'Compte',
				license_number: 'Numéro de licence',
				type: 'Taper',
			},
			name_one: 'Driver License',
			name_other: 'Driver Licenses',
		},
		emergency_contacts: {
			fields: {},
			name_one: 'Emergency Contact',
			name_other: 'Emergency Contacts',
		},
		employees: {
			fields: {
				city_of_birth_id: 'Ville de naissance',
				country_of_birth_id: 'Pays de naissance',
				date_of_birth: 'Date de naissance',
				date_of_hiring: "Date d'embauche",
				full_name: 'Nom et prénom',
				gender: 'Genre',
				image_id: 'Image de profil',
				phone: 'Numéro de téléphone',
				preferences: 'Préférence',
				sponsor_id: 'Parrainer',
				username: "Nom d'utilisateur",
			},
			helperText: {
				username:
					"Entrez votre nom d'utilisateur ici, vous pouvez l'utiliser pour vous connecter",
			},
			name_one: 'Company Employee',
			name_other: 'Company Employees',
		},
		entities: {
			fields: {
				activity: 'Activité',
				children: 'Enfants',
				email: 'E-mail',
				entity_type_id: "Type d'entité",
				logo_id: 'logo',
				name: 'Nom',
				parent_id: 'Parente',
				phone: 'Téléphone',
				tax_number: "Numéro d'identification fiscale",
				trading_number: 'Numéro de négociation',
				type: 'Taper',
			},
			name_one: 'Entity',
			name_other: 'Entities',
		},
		entity_types: {
			fields: {
				description: 'description',
				level: 'Niveau',
				name: 'Nom',
				slug: 'Limace',
			},
			name_one: 'Entity Type',
			name_other: 'Entity Types',
		},

		identification_cards: {
			fields: {
				back_image_id: 'Image arrière',
				date_of_issue: "Date d'émission",
				employee_id: 'Compte',
				front_image_id: 'Image avant',
				id_number: "Numéro d'identification",
				place_of_issue_id: 'Lieu de délivrance',
			},
			name_one: 'Identification Card',
			name_other: 'Identification Cards',
		},
		images: {
			fields: {
				description: 'description',
				object_id: 'Objet',
			},
			name_one: 'Image',
			name_other: 'Images',
		},
		insurance_reports: {
			fields: {},
			name_one: 'Insurance Report',
			name_other: 'Insurance Reports',
		},
		job_titles: {
			fields: {
				name: 'Nom',
			},
			name_one: 'Job Title',
			name_other: 'Job Titles',
		},
		jsonschema_validators: {
			fields: {
				description: 'description',
				schema: 'Schéma',
				schema_name: 'Nom de schéma',
			},
			name_one: 'Validator',
			name_other: 'Validators',
		},

		options: {
			fields: {
				name: 'Nom',
				validator: 'Validateur',
				value: 'Valeur',
			},
			name_one: 'Option',
			name_other: 'Options',
		},
		passports: {
			fields: {
				date_of_expiry: "Date d'expiration",
				date_of_issue: "Date d'émission",
				employee_id: 'Compte',
				place_of_issue_id: 'Lieu de délivrance',
			},
			name_one: 'Passport',
			name_other: 'Passports',
		},
		policies: {
			fields: {},
			name_one: 'Policy',
			name_other: 'Policies',
		},
		proposals: {
			fields: {
				description: 'description',
			},
			name_one: 'Proposal',
			name_other: 'Proposals',
		},
		relatives: {
			fields: {
				date_of_birth: 'Date de naissance',
				employee_id: 'Compte',
				name: 'Nom',
			},
			name_one: 'Relative',
			name_other: 'Relatives',
		},
		request_advances: {
			fields: {
				advance_type_id: 'Les types',
				amount: 'Montante',
				date_of_payment: 'Date de paiement',
				date_of_receipt: 'Date de réception',
				installments: 'Versements',
			},
			name_one: 'Request Advance',
			name_other: 'Request Advances',
		},
		request_allowances: {
			fields: {
				allowance_type_id: "Type d'allocation",
				suggested_amount: 'Montant suggéré',
			},
			name_one: 'Request Allowance',
			name_other: 'Request Allowances',
		},
		request_benefits: {
			fields: {},
			name_one: 'Request Benefit',
			name_other: 'Request Benefits',
		},
		request_bonuses: {
			fields: {
				bonus_type_id: 'Taper',
			},
			name_one: 'Bonus',
			name_other: 'Bonuses',
		},
		request_commissions: {
			fields: {},
			name_one: 'Commission',
			name_other: 'Commissions',
		},
		request_delegations: {
			fields: {
				from: 'Depuis',
				reason: 'Les raisons',
				to: 'À',
			},
			name_one: 'Delegation',
			name_other: 'Delegations',
		},
		request_expenses: {
			fields: {},
			name_one: 'Expense',
			name_other: 'Expenses',
		},
		request_external_delegations: {
			fields: {
				destination: 'destination',
				from: 'Depuis',
				reason: 'Raison',
				to: 'À',
			},
			name_one: 'External Delegation',
			name_other: 'External Delegations',
		},
		request_installments: {
			fields: {},
			name_one: 'Installment',
			name_other: 'Installments',
		},
		request_internal_delegations: {
			fields: {
				entity_id: 'Entité',
				from: 'Depuis',
				reason: 'Raison',
				to: 'À',
			},
			name_one: 'Internal Delegation',
			name_other: 'Internal Delegations',
		},
		request_payroll_deductions_cancels: {
			fields: {
				reason: 'Raison',
			},
			name_one: 'Payroll Deduction Cancellation',
			name_other: 'Payroll Deduction Cancellations',
		},
		request_promotions: {
			fields: {
				new_job_title_id: "Nouveau titre d'emploi",
			},
			name_one: 'Promotion',
			name_other: 'Promotions',
		},
		request_punctuality_changes: {
			fields: {},
			name_one: 'Punctuality Change',
			name_other: 'Punctuality Changes',
		},
		request_purchases: {
			fields: {
				amount: 'Montante',
				name: 'Nom',
			},
			name_one: 'Purchase',
			name_other: 'Purchases',
		},
		request_resignations: {
			fields: {
				reason: 'Raison',
			},
			name_one: 'Resignation',
			name_other: 'Resignations',
		},
		request_retirement_age_extensions: {
			fields: {
				survey_answer_id: "Réponse d'enquête",
			},
			name_one: 'Retirement Age Extension',
			name_other: 'Retirement Age Extensions',
		},
		request_salary_raises: {
			fields: {
				amount: 'Montant suggéré',
				reasons: 'Les raisons',
			},
			name_one: 'Salary Raise',
			name_other: 'Salary Raises',
		},
		request_settlements: {
			fields: {},
			name_one: 'Settlement',
			name_other: 'Settlements',
		},

		request_transfers: {
			fields: {},
			name_one: 'Transfer',
			name_other: 'Transfers',
		},
		request_vacations: {
			fields: {
				from: 'Depuis',
				to: 'À',
				vacation_type_id: 'Taper',
			},
			name_one: 'Vacation',
			name_other: 'Vacations',
		},
		request_work_hours_changes: {
			fields: {
				new_work_hours_id: 'Nouvelles heures de travail',
			},
			name_one: 'Work Hour Change',
			name_other: 'Work Hour Changes',
		},
		requests: {
			fields: {
				description: 'description',
			},
			name_one: 'Request',
			name_other: 'Requests',
		},
		res_cities: {
			fields: {
				city_ascii: 'Nom de Ville',
			},
			name_one: 'City',
			name_other: 'Cities',
		},
		res_countries: {
			fields: {
				currency_id: 'Devise',
				iso2: 'ISO2',
				iso3: 'ISO3',
				local_name: 'Nom local',
				name: 'Nom',
				nationality: 'Nationalité',
			},
			name_one: 'Country',
			name_other: 'Countries',
		},
		res_currencies: {
			fields: {
				active: 'active',
				currency_subunit_label: 'Étiquette de sous-unité de devise',
				currency_unit_label: "Étiquette d'unité de devise",
				decimal_places: 'Décimal',
				full_name: 'Nom et prénom',
				name: 'Nom',
				position: 'position',
				rounding: 'Arrondie',
				symbol: 'Symbole',
			},
			name_one: 'Currency',
			name_other: 'Currencies',
		},
		residencies: {
			fields: {
				from: 'Date de début',
				to: 'Date de fin',
			},
			name_one: 'Residency',
			name_other: 'Residencies',
		},
		sponsors: {
			fields: {},
			name_one: 'Sponsor',
			name_other: 'Sponsors',
		},
		status_histories: {
			fields: {},
			name_one: 'Status History',
			name_other: 'Status Histories',
		},
		survey_answers: {
			fields: {
				answers: 'Répondre',
				responder_id: 'Intervenant',
				status: 'Statut',
				survey_id: 'Enquête',
			},
			name_one: 'Survey Answer',
			name_other: 'Survey Answers',
		},
		surveys: {
			fields: {
				name: 'Nom',
				survey_schema: "Schéma d'enquête",
			},
			name_one: 'Survey',
			name_other: 'Surveys',
		},
		template: {
			fields: {},
			name_one: 'Template',
			name_other: 'Templates',
		},
		vacations: {
			fields: {},
			name_one: 'Vacation',
			name_other: 'Vacations',
		},
		visas: {
			fields: {
				visa_type_id: 'Types de visas',
			},
			name_one: 'Visa',
			name_other: 'Visas',
		},
		work_hours: {
			fields: {},
			name_one: 'Work Hour',
			name_other: 'Work Hours',
		},
		work_locations: {
			fields: {},
			name_one: 'Work Location',
			name_other: 'Work Locations',
		},
	},
};
