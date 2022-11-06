import { connect } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { deleteItem, toggleReminder } from '../redux/actions';


const Item = ({ item, onDelete, toggleReminder }) => {
  return (
    <div 
      className={`item ${item.reminder ? 'reminder' : ''}`} 
      onDoubleClick={() => toggleReminder(item.id)} 
    >
        <h3>
            {item.text} 
            <FaTimes 
                style={{ color: 'red', cursor: 'pointer'}}
                onClick={() => onDelete(item.id)}
            />
        </h3>
        <p>{item.day}</p>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => dispatch(deleteItem(id)),
    toggleReminder: (id) => dispatch(toggleReminder(id))
  };
};

export default connect(null, mapDispatchToProps)(Item);
