import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyB1Tb6qmHIuOb1a0_3aZFJysTEis5vEzso',
	appId: '1:701102948843:web:85bf149cb42bd430a1d9ae',
	authDomain: 'sfyr-421711.firebaseapp.com',
	measurementId: 'G-C9XKQS7KC4',
	messagingSenderId: '701102948843',
	projectId: 'sfyr-421711',
	storageBucket: 'sfyr-421711.appspot.com',
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
