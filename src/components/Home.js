import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'

import NavBarContainer from '../containers/NavBarContainer'
import InventoryGrid from './InventoryGrid'

export default class Home extends Component {
	render() {
		return (
			<Grid>
				<NavBarContainer />
				<InventoryGrid />
			</Grid>
		)
	}
}
