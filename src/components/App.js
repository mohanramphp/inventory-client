import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'

import '../styles/App.css'

export default class App extends Component {
	render() {
		return this.props.children
	}
}