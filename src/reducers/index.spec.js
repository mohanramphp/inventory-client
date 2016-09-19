import reducer from './index'
import * as types from '../constants/ActionTypes'

describe('reducer', () => {
	it('should handle initial state with empty action', () => {
		const action = {}
	    const nextState = reducer(undefined, action)
	    expect(nextState).toEqual([])
	})

	it('should handle initial state', () => {
		const action = {
				type: types.SET_STATE,
		    	state: [{
					id: 1,
					category: "Sporting Goods",
					price: 49.99,
					stocked: true,
					name: "Football"
				}]
			}
	    const nextState = reducer(undefined, action)
	    expect(nextState).toEqual([
							    	{
										id: 1,
										category: "Sporting Goods",
										price: 49.99,
										stocked: true,
										name: "Football"
									}
								])
	})

	it('should handle ADD_INVENTORY', () => {
		const initialState = [
			{
				id: 1,
				category: "Sporting Goods",
				price: 49.99,
				stocked: true,
				name: "Football"
	    	}
		]
		const action = {
			type: types.ADD_INVENTORY,
			category: "Electronics",
			price: 99.99,
			name: "iPod Touch"
		}
	    const nextState = reducer(initialState, action)
	    expect(nextState).toEqual([
			{
				id: 1,
				category: "Sporting Goods",
				price: 49.99,
				stocked: true,
				name: "Football"
	    	},
	    	{
				id: 2,
				category: "Electronics",
				price: 99.99,
				stocked: true,
				name: "iPod Touch"
	    	}
		])
		// Checking whether state got polluted
		expect(initialState).toEqual([
			{
				id: 1,
				category: "Sporting Goods",
				price: 49.99,
				stocked: true,
				name: "Football"
	    	}
		])
	})

	it('should handle EDIT_INVENTORY', () => {
		const initialState = [
			{
				id: 1,
				category: "Sporting Goods",
				price: 49.99,
				stocked: true,
				name: "Football"
	    	},
	    	{
				id: 2,
				category: "Electronics",
				price:399.99,
				stocked: false,
				name: "iPhone 5"
	    	}
		]
		const action = {
			type: types.EDIT_INVENTORY,
			id: 1,
			category: "Electronics",
			price: 99.99,
			name: "iPod Touch"
		}
	    const nextState = reducer(initialState, action)
	    expect(nextState).toEqual([
			{
				id: 1,
				category: "Electronics",
				price: 99.99,
				stocked: true,
				name: "iPod Touch"
	    	},
	    	{
				id: 2,
				category: "Electronics",
				price:399.99,
				stocked: false,
				name: "iPhone 5"
	    	}
		])
	})

	it('should handle DELETE_INVENTORY', () => {
		const initialState = [
			{
				id: 1,
				category: "Sporting Goods",
				price: 49.99,
				stocked: true,
				name: "Football"
	    	},
	    	{
				id: 2,
				category: "Electronics",
				price:399.99,
				stocked: false,
				name: "iPhone 5"
	    	},
	    	{
				id: 3,
				category: "Electronics",
				price: 99.99,
				stocked: true,
				name: "iPod Touch"
	    	}
		]
		const action = {
			type: types.DELETE_INVENTORY,
			id: 2
		}
	    const nextState = reducer(initialState, action)
	    expect(nextState).toEqual([
			{
				id: 1,
				category: "Sporting Goods",
				price: 49.99,
				stocked: true,
				name: "Football"
	    	},
	    	{
				id: 3,
				category: "Electronics",
				price: 99.99,
				stocked: true,
				name: "iPod Touch"
	    	}
		])
	})
})