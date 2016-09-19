import React, { Component } from 'react'
import { Row, Col, Table} from 'react-bootstrap'

import InventoryHeader from './InventoryHeader'
import InventoryContainer from '../containers/InventoryContainer'

export default class InventoryGrid extends Component {
	render() {
		
		return (
				<Row className="show-grid">
					<Col md={12}>
						<Table striped bordered condensed hover>
						    <InventoryHeader />
						    <InventoryContainer />
						  </Table>
					</Col>
				</Row>
			)
	}
}
