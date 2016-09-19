import React, { Component } from 'react'

import Inventory from './Inventory'

export default class InventoryList extends Component {
	render() {
		const { list, onEditClick, onDeleteClick } = this.props
		const inventories = list.map(inventory => {
			return <Inventory key={inventory.id} {...inventory} onEdit={onEditClick} onDelete={onDeleteClick}></Inventory>	
		})
		return (
			<tbody>
		      {inventories}
		    </tbody>
		)
	}
}
