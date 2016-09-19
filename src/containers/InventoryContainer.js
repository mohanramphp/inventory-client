import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { deleteInventory } from '../actions'
import InventoryList from '../components/InventoryList'

const mapStateToProps = (state) => {
  return {
    list: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEditClick: (id) => {
      browserHistory.push('/form/' + id)
    },
    onDeleteClick: (id) => {
      dispatch(deleteInventory(id))
    }
  }
}

const InventoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryList)

export default InventoryContainer
