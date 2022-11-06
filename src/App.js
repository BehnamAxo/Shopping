// import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AddItem from './components/AddItem';
import Header from './components/Header';
import Items from './components/Items';


const App = ({ items }) => {

  // const fetchItem = async (id) => {
  //   const res = await fetch(`${baseURL}${id}`);
  //   const data = await res.json();

  //   return data;
  // };

  // const toggleStyle = async (id) => {
  //   const taskToToggle = await fetchItem(id)
  //   const updatedItem = { ...taskToToggle, reminder: !taskToToggle.reminder }

  //   const res = await fetch(`${baseURL}${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(updatedItem)
  //   })

  //   const data = await res.json()

  //   setItems(
  //     items.map((item) =>
  //       item.id === id ? { ...item, reminder: data.reminder } : item
  //     )
  //   )
  // };

  return (
    <div className='container'>
      {/* <Header
        title='To-Do List'
        onAdd={() => setShowAddItem(!showAddItem)}
        showAdd={showAddItem}
      />
      {showAddItem && <AddItem onAdd={addItem} />}  */}
      <Header title='To-Do List' />
      <AddItem />
      {
        items.length > 0 ? <Items items={items} /> : <h3>Shopping cart empty</h3>
      }
    </div>
  );
};

const mapStateToProps = ({ posts }) => {
  return {
    items: posts.items
  }
};

// const mapStateToProps = (state) => {
//   return state;
// };

export default connect(mapStateToProps)(App);
