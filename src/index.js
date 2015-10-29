import { createStore, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import reducer from './reducer.js';
import * as actions from './actions.js';

const persistSession = window.location.href.match(/[?&]debug_session=([^&]+)\b/)[1];
console.log('persistSession: ', persistSession);
const finalCreateStore = compose(
  // Enable Redux DevTools Extension
  window.devToolsExtension || (f => f),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(persistSession)
)(createStore);
const store = finalCreateStore(reducer);

let prevState = store.getState();
console.log('state: ', store.getState());
store.subscribe(() => {
  if(prevState !== store.getState()) {
		console.log('state: ',store.getState())
	}
});

window.add = function(title) {
  store.dispatch(actions.addObject(title));
}
window.remove = function(title) {
  store.dispatch(actions.removeObject(title));
}
