import { connect } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { deleteItem, toggleReminder, showDeleteModal } from '../redux/actions';


const Item = ({ item, onDelete, toggleReminder, showDeleteModal }) => (
  <div 
    className={`item ${item.reminder ? 'reminder' : ''}`} 
    onDoubleClick={() => toggleReminder(item.id)} 
  >
      <h3>
          {item.text} 
          <FaTimes 
              style={{ color: 'red', cursor: 'pointer'}}
              onClick={() => showDeleteModal(item.id)}
          />
      </h3>
      <p>{item.day}</p>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(deleteItem(id)),
  showDeleteModal: (id) => dispatch(showDeleteModal(id)),
  toggleReminder: (id) => dispatch(toggleReminder(id))
});

export default connect(null, mapDispatchToProps)(Item);
