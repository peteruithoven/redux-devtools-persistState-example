export const ADD_OBJECT = 'ADD_OBJECT';
export const REMOVE_OBJECT = 'REMOVE_OBJECT';

export function addObject(title) {
	return {type: ADD_OBJECT, title}
}
export function removeObject(title) {
	return {type: REMOVE_OBJECT, title}
}
