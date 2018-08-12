import { createStore, applyMiddleware, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer} from 'react-redux-firebase'
import firebase from 'firebase'
import thunk from 'redux-thunk';

const firebaseConfig = {
  apiKey: "AIzaSyADd1MncHWqFwwPcnBUbnIYSpzjZpuW0r8",
    authDomain: "redux-firebase-practice-ec198.firebaseapp.com",
    databaseURL: "https://redux-firebase-practice-ec198.firebaseio.com",
    projectId: "redux-firebase-practice-ec198",
    storageBucket: "redux-firebase-practice-ec198.appspot.com",
    messagingSenderId: "136837567534"
}

firebase.initializeApp(firebaseConfig)
// export default function configureStore(initialState) {
//     return createStore (
//         rootReducer,
//         initialState,
//         applyMiddleware(thunk)
//     );
// }
const rrfConfig = {
  userProfile: 'users'
}

export const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  applyMiddleware(thunk)

)(createStore)
