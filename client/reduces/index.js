import {USERS_FETCH} from '../constants/index.js';
import (createStore, combineReducers) from 'redux';
const defaultState = {
	usersList: [],
	error: ''
}

const reducer = (state = defaultState, action) => {
	switch(action.type) {
		case USERS_FETCH.USERS_FETCH_SUCSESS:
			return Object.assign({}, state, {usersList: action.usersList})
		case USERS_FETCH.USERS_FETCH_ERROR:
			return Object.assign({}, state, {error: action.error})	
		default: return state;
	}
}