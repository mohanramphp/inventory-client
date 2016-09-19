import * as types from '../constants/ActionTypes'

export const setState = (state) => {
	return {
		type: types.SET_STATE,
		state
	}
}

export const addInventory = (inventory) => {
	return {
		type: types.ADD_INVENTORY,
		...inventory
	}
}

export const editInventory = (inventory) => {
	return {
		type: types.EDIT_INVENTORY,
		...inventory
	}
}

export const deleteInventory = (id) => {
	return {
		type: types.DELETE_INVENTORY,
		id
	}
}
