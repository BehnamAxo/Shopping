import { useState } from 'react';
import AddItem from './components/AddItem';
import Header from './components/Header';
import Items from './components/Items';


const App = () => {
  const [showAddItem, setShowAddItem] = useState(false);
  const [items, setItems] = useState([
      {
          id: 1,
          text: "Doctors Appointment",
          day: 'Feb 5th at 2:30 p.m.',
          reminder: true
      },
      {
          id: 2,
          text: "Meeting at School",
          day: 'Feb 6th at 4:30 p.m.',
          reminder: true
      }
  ]);

  const addItem = (item) => {
    const id = Math.floor(Math.random() * 10000);
    const newItem = {
      id,
      ...item
    };

    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id ));
  };

  const toggleStyle = (id) => {
    setItems(items.map((item) => 
      item.id === id ? {...item, reminder: !item.reminder} : item 
    ));
  };

  return (
    <div className='container'>
      <Header
        title='Shopping List'
        onAdd={() => setShowAddItem(!showAddItem)}
        showAdd={showAddItem}
      />
      {showAddItem && <AddItem onAdd={addItem} />}
      {
        items.length > 0 ? <Items items={items} onDelete={deleteItem} onToggle={toggleStyle} /> : <h3>Shopping cart empty</h3>
      }
    </div>
  );
};

export default App;
