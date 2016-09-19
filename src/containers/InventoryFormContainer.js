import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as actions from '../actions'
import InventoryForm from '../components/InventoryForm'

const getInventoryDetail = (inventories, id) => {
  const filterResult = inventories.filter(inventory => inventory.id === parseInt(id,10))
  return (!!filterResult.length) ? filterResult[0] : {}
}

const mapStateToProps = (state, ownProps) => {
  return {
    inventory: getInventoryDetail( state, ownProps.params.inventoryId)
  }
}

const navigateToHome = () => {
  browserHistory.push('/')
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators( actions, dispatch),
    navigateToHome
  }
}

const InventoryFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryForm)

export default InventoryFormContainer
