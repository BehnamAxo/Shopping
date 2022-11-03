import { useState } from 'react';

const AddItem = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Please add an item!');
            return;
        }

        onAdd({ text, day, reminder });
        setText('');
        setDay('');
        setReminder(false);
    };

    return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Item</label>
            <input 
                type='text' 
                placeholder='Add Item' 
                value={text} 
                onChange={(e) => setText(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input 
                type='text' 
                placeholder='Add Day & Time'
                value={day} 
                onChange={(e) => setDay(e.target.value)}
            />
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input 
                type='checkbox'
                checked={reminder}
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)} 
            />
        </div>
        <input 
            className='btn btn-block'
            type='submit' 
            value='Save Item' 
        />
    </form>
    )
};

export default AddItem;
