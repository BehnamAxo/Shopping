import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AddItem from './components/AddItem';
import Header from './components/Header';
import Items from './components/Items';
// import { fetchItems } from './redux/actions';


const App = (props) => {
  // const baseURL = 'http://localhost:5000/items/';
  // const [showAddItem, setShowAddItem] = useState(false);
  // const [items, setItems] = useState([]);

  // const fetchItem = async (id) => {
  //   const res = await fetch(`${baseURL}${id}`);
  //   const data = await res.json();

  //   return data;
  // };

  // useEffect(() => {
  //   const getItems = async () => {
  //     const itemsFromServer = await fetchItems();

  //     console.log(`itemsFromServer => ${itemsFromServer}`)
  //     // setItems(itemsFromServer);
  //   };

  //   getItems();
  // }, []);

  // const addItem = async (item) => {
  //   const res = await fetch(baseURL, {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(item)
  //   });

  //   const data = await res.json();

  //   setItems([...items, data]);
  // }

  // const deleteItem = async (id) => {
  //   await fetch(
  //     `${baseURL}${id}`, {
  //       method: 'DELETE'
  //     }
  //   );
  //   setItems(items.filter((item) => item.id !== id ));
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


  console.log(`Inside component => ${props.items}`);
  return (
    <div className='container'>
      {/* <Header
        title='To-Do List'
        onAdd={() => setShowAddItem(!showAddItem)}
        showAdd={showAddItem}
      />
      {showAddItem && <AddItem onAdd={addItem} />} */}
      {/* {
        items.length > 0 ? <Items items={items} onDelete={deleteItem} onToggle={toggleStyle} /> : <h3>Shopping cart empty</h3>
      } */}
      {
        props.items.length > 0 ? <Items items={props.items} /> : <h3>Shopping cart empty</h3>
      }
    </div>
  );
};

const mapStateToProps = ({ posts }) => {
  
  console.log(`mapStateToProps state => ${posts.items}`);

  return {
    items: posts.items
  }
};

export default connect(mapStateToProps)(App);



