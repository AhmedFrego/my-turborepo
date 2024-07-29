/* eslint-disable i18next/no-literal-string */
import {
	Document,
	Image,
	Page,
	PDFViewer,
	StyleSheet,
	Text,
	View,
} from '@react-pdf/renderer';
import React from 'react';
import { appName } from 'src/constants';
import { useLocale } from 'src/hooks';
import { Tables } from 'src/types';
import { Logger } from 'src/utils';

export interface EmployeeIDProps {
	record?: Tables<'employees'>;
}

export const EmployeeID: React.FC<EmployeeIDProps> = () => {
	// const record = useRecordContext<Tables<'employees'>>();
	const { locale } = useLocale();

	const employee = {
		department: 'Development',
		email: 'jane.doe@example.com',
		name: 'Mohammed Faragallah',
		phone: '+201229823464',
		position: 'Software Engineer',
	};

	return (
		<PDFViewer style={styles.viewer}>
			<Document
				author={appName}
				creator={appName}
				keywords={['Employee', 'Card'].join(' ')}
				language={locale}
				pageLayout="singlePage"
				subject={'Employee Card for ' + employee.name}
				title="Employee Card"
				onRender={Logger.log}
			>
				<Page
					size={[1050, 600]}
					style={styles.page}
				>
					<View>
						<Image
							src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg"
							style={styles.avatar}
						/>
					</View>
					<View>
						<Text style={styles.title}>Employee Card</Text>
						<Text style={styles.info}>Name: {employee.name}</Text>
						<Text style={styles.info}>Position: {employee.position}</Text>
						<Text style={styles.info}>Department: {employee.department}</Text>
						<Text style={styles.info}>Email: {employee.email}</Text>
						<Text style={styles.info}>Phone: {employee.phone}</Text>
					</View>
					<View>
						<Image
							src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg"
							style={styles.qrCode}
						/>
					</View>
				</Page>
			</Document>
		</PDFViewer>
	);
};

const styles = StyleSheet.create({
	avatar: {
		backgroundColor: '#09c',
		height: '600px',
		width: '400px',
	},
	info: {
		fontSize: 24,
		marginBottom: 10,
	},
	page: {
		alignItems: 'center',
		backgroundColor: '#fff',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 25,
	},

	qrCode: {
		backgroundColor: '#ddd',
		height: '200px',
		width: '200px',
	},
	title: {
		fontSize: 30,
		marginBottom: 20,
	},
	viewer: {
		alignItems: 'center',
		border: 'none',
		display: 'flex',
		height: 600,
		justifyContent: 'center',
		paddingTop: 32,
		width: '100%',
	},
});
