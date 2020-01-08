import * as types from './../constants/ActionType';
import * as configs from './../constants/Config';

let defaultState = [];
let cartItems 	 = JSON.parse(localStorage.getItem(configs.CARTS_FROM_LOCAL_STOGARE));
defaultState 	 = (cartItems  && cartItems.length > 0) ? cartItems : defaultState;

const carts = (state = defaultState, action) => {
	switch(action.type){
		case types.BUY_PRODUCT:
			return state;

		case types.UPDATE_PRODUCT:
			return state;

		case types.REMOVE_PRODUCT:
			return state;

		default:
			return state;
	}
}

export default carts;