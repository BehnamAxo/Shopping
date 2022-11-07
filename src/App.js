import { connect } from 'react-redux';
import AddItem from './components/AddItem';
import Header from './components/Header';
import Items from './components/Items';
import Modal from './components/Modal';


const App = ({ items, showForm, deleteModal }) => (
  <div className='container'>
    <Header title='To-Do List' />
    { showForm && <AddItem /> }
    { items.length > 0 ? <Items items={items} /> : <h3>Shopping cart empty</h3> }
    { deleteModal.showModal && <Modal /> }
  </div>
);

const mapStateToProps = ({ currentState }) => ({
  items: currentState.items,
  showForm: currentState.showForm,
  deleteModal: currentState.deleteModal
});

export default connect(mapStateToProps)(App);
