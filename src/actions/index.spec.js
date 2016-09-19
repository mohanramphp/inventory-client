/**
* Test suite covering actions
*/
import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('actions', () => {
  it('setState should create SET_STATE action', () => {
    const initialState = [
	    	{
			id: 1,
			category: "Sporting Goods",
			price: 49.99,
			stocked: true,
			name: "Football"
		}
    ]
    const nextState = {
    	type: types.SET_STATE,
    	state: [
		    	{
				id: 1,
				category: "Sporting Goods",
				price: 49.99,
				stocked: true,
				name: "Football"
			}
	    ]
    }
    expect(actions.setState(initialState)).toEqual(nextState)
  })

  it('addInventory should create ADD_INVENTORY action', () => {
    const initialState = {
			category: "Sporting Goods",
			price: 49.99,
			name: "Football"
    	}
    const nextState = {
    	type: types.ADD_INVENTORY,
  		category: "Sporting Goods",
  		price: 49.99,
  		name: "Football"
    }
    expect(actions.addInventory(initialState)).toEqual(nextState)
  })

  it('editInventory should create EDIT_INVENTORY action', () => {
    const initialState = {
			id: 2,
			category: "Sporting Goods",
			price: 49.99,
			name: "Football"
    	}
    const nextState = {
    	type: types.EDIT_INVENTORY,
    	id: 2,
  		category: "Sporting Goods",
  		price: 49.99,
  		name: "Football"
    }
    expect(actions.editInventory(initialState)).toEqual(nextState)
  })

  it('deleteInventory should create DELETE_INVENTORY action', () => {
    const initialState = 2;
    const nextState = {
    	type: types.DELETE_INVENTORY,
    	id: 2
    }
    expect(actions.deleteInventory(initialState)).toEqual(nextState)
  })
})

