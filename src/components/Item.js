import { connect } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { deleteItem } from '../redux/actions';


const Item = ({ item, onDelete }) => {
  console.log(`onDelete ==> ${onDelete}`);
  return (
    <div className={`item ${item.reminder ? 'reminder' : ''}`} >
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


// The dispatch function is available as an argument to mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => dispatch(deleteItem(id))
  };
};

export default connect(null, mapDispatchToProps)(Item);
