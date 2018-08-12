import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStoreWithFirebase} from './store/configureStore'
import { Provider } from 'react-redux'
import ItemList from './components/ItemList'
import rootReducer from './reducers';



const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState);

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
