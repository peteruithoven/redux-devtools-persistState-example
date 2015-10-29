import * as actions from './actions.js';

const initialState = [];

export default function reducer(state = initialState, action) {
	console.log('reducer: action: ', action.type, action.title);
	switch(action.type) {
		
		case actions.ADD_OBJECT:
			return [
				...state,
				action.title
			]
			break;
			
			case actions.REMOVE_OBJECT:
				return state.filter(item => item != action.title)
				break;
				
		default: 
			return state;
			break;
			
	}
}
