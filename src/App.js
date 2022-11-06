import { connect } from 'react-redux';
import AddItem from './components/AddItem';
import Header from './components/Header';
import Items from './components/Items';


const App = ({ items, showForm }) => {
  console.log(`showForm => ${showForm}`);
  return (
    <div className='container'>
      <Header title='To-Do List' />
      { showForm && <AddItem /> }
      {
        items.length > 0 ? <Items items={items} /> : <h3>Shopping cart empty</h3>
      }
    </div>
  );
};

const mapStateToProps = ({ currentState }) => {
  return {
    items: currentState.items,
    showForm: currentState.showForm
  }
};

export default connect(mapStateToProps)(App);
