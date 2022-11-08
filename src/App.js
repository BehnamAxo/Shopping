import { connect } from 'react-redux';
import AddItem from './components/AddItem';
import Header from './components/Header';
import Items from './components/Items';
import Modal from './components/Modal';


const App = ({ showForm, deleteModal }) => (
  <div className='container'>
    <Header title='To-Do List' />
    { showForm && <AddItem /> }
    <Items />
    { deleteModal.showModal && <Modal /> }
  </div>
);

const mapStateToProps = ({ currentState }) => ({
  showForm: currentState.showForm,
  deleteModal: currentState.deleteModal
});

export default connect(mapStateToProps)(App);
