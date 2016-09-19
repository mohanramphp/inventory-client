import React, { Component } from 'react';

export default class InventoryHeader extends Component {
	
	render() {
		const inlineStyle = {
			width: '285px'
		}
		return (
			<thead>
		      <tr className="table-header">
		        <th style={inlineStyle}>Name</th>
		        <th style={inlineStyle}>Price</th>
		        <th style={inlineStyle}>Category</th>
		        <th style={inlineStyle}>Action</th>
		      </tr>
		    </thead>
		)
	}
}

