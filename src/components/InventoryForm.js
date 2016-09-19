import React, { Component } from 'react'
import { Grid, Form, FormGroup, Col, Button, ControlLabel, FormControl } from 'react-bootstrap'

export default class InventoryForm extends Component {
	constructor(props) {
		super(props);
		const { inventory } = props
		this.state = inventory
		this.updateCategory = this.updateCategory.bind(this)
		this.updateName 	= this.updateName.bind(this)
		this.updatePrice 	= this.updatePrice.bind(this)
		this.onSubmit	 	= this.onSubmit.bind(this)
	}

	 updateCategory(e) {
	 	this.setState({category : e.target.value})
	 }

	 updateName(e) {
	 	this.setState({name : e.target.value})
	 }

	 updatePrice(e) {
	 	this.setState({price : e.target.value})
	 }

	 onSubmit(e) {
	 	e.preventDefault()
	 	const { editInventory, addInventory } = this.props.actions
	 	const { navigateToHome } = this.props
	 	if(this.state.id) {
	 		editInventory(this.state)
	 	} else {
	 		addInventory(this.state)
	 	}
	 	alert('Inventory details saved successfully');
	 	navigateToHome()
	 	return false
	 }

	render() {
		const style = {
			marginTop: '20px'
		}
		const { navigateToHome } = this.props
		return (
			<Grid>
				<Form horizontal style={style} onSubmit={this.onSubmit}>
				    <FormGroup controlId="formHorizontalEmail">
				      <Col componentClass={ControlLabel} sm={2}>
				        Category
				      </Col>
				      <Col sm={10}>
				        <FormControl 
				        	type="text" 
				        	placeholder="Category" 
				        	value={this.state.category || ''}
				        	onChange={this.updateCategory} />
				      </Col>
				    </FormGroup>
				    <FormGroup controlId="formHorizontalEmail">
				      <Col componentClass={ControlLabel} sm={2}>
				        Name
				      </Col>
				      <Col sm={10}>
				        <FormControl 
				        	type="text" 
				        	placeholder="Name"
				        	value={this.state.name || ''}
				        	onChange={this.updateName} />
				      </Col>
				    </FormGroup>
				    <FormGroup controlId="formHorizontalEmail">
				      <Col componentClass={ControlLabel} sm={2}>
				        Price
				      </Col>
				      <Col sm={10}>
				        <FormControl 
				        	type="text" 
				        	placeholder="Price" 
				        	value={this.state.price || ''}
				        	onChange={this.updatePrice} />
				      </Col>
				    </FormGroup>
					<FormGroup>
				      <Col smOffset={2} sm={10}>
				        <Button bsStyle="primary" bsSize="small" type="submit">
				          Save
				        </Button>
				        <Button bsStyle="link" onClick={navigateToHome}>
				          Cancel
				        </Button>
				      </Col>
				    </FormGroup>
				  </Form>
			  </Grid>
		);
	}
}
