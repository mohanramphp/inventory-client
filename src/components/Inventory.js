import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Inventory extends Component {
	render() {
		const { id, name, price, category, onEdit, onDelete } = this.props
		return (
			<tr>
		        <td>{name}</td>
		        <td>{price}</td>
		        <td>{category}</td>
		        <th>
		        	<Button bsStyle="link" onClick={() => onEdit(id) }>Edit</Button>
		        	&nbsp;|&nbsp;
		        	<Button bsStyle="link" onClick={() => onDelete(id) }>Delete</Button>
		        </th>
		    </tr>
		);
	}
}
