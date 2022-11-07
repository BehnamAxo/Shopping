import { connect } from 'react-redux';
import { deleteItem, hideDeleteModal } from '../redux/actions';

const Modal = ({ deleteModal, onDelete, hideDeleteModal }) => {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='title'>
            <h2>Are you sure you want to delete the item?</h2>
        </div>
        <div className='footer'>
            <button onClick={() => onDelete(deleteModal.id)}>Yes</button>
            <button onClick={() => hideDeleteModal()} >No</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ currentState }) => ({
    deleteModal: currentState.deleteModal
  });

const mapDispatchToProps = (dispatch) => ({
    onDelete: (id) => dispatch(deleteItem(id)),
    hideDeleteModal: () => dispatch(hideDeleteModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
