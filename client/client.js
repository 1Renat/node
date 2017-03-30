import React from 'react';
import ReactDOM from 'react-dom';
//Импорт библиотек из нод_моделс
import App from './components/app.js'
//Импорт компонента
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/index.js';
import sagas from '../side-effects/index.js'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);


ReactDOM.render(
	<Provider store={store}>
		<App />,
	<Provider>
	document.getElementById('root')
	);


