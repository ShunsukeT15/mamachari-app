import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCM36dDY31UYL-eWnc9zEVuffoat35a2HE',
  authDomain: 'pen-rpg.firebaseapp.com',
  databaseURL: 'https://pen-rpg.firebaseio.com',
  projectId: 'pen-rpg',
  storageBucket: 'pen-rpg.appspot.com',
  messagingSenderId: '314466354756',
  appId: '1:314466354756:ios:5209f764009f72439b9e11',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
