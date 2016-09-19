import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import createLogger from 'redux-logger'
import { setState } from './actions'
import reducer from './reducers'
import { inventoryList } from './api/app-data-model.json'
import App from './components/App'
import Home from './components/Home'
import InventoryFormContainer from './containers/InventoryFormContainer'

const logger = createLogger()
const store = createStore(
					reducer,
					applyMiddleware(logger)
				)
store.dispatch(setState(inventoryList))

const routes = <Route component={App}>
					<Route path="/" component={Home} />
					<Route path="/form(/:inventoryId)" component={InventoryFormContainer} />
				</Route> 				
render(
  <Provider store={store}>
 	<Router history={browserHistory}>{routes}</Router>	
 </Provider>,
  document.getElementById('root')
)
