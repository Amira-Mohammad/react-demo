import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware , compose} from 'redux';
import rootReducer from '../src/store/reducers/rootReducer';
import thunk  from 'redux-thunk';
import { reduxFirestore , getFirestore , createFirestoreInstance} from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase'
import firebaseConfig from './store/configs/FBconfigs'
const store = createStore(rootReducer ,
   compose( applyMiddleware(thunk.withExtraArgument({
  getFirebase , getFirestore

})), 
reduxFirestore(firebaseConfig)


))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
