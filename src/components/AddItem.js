import { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../redux/actions';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AddItem = ({ onSubmitForm }) => {
    const [values, setValues] = useState({
        text: '',
        day: '',
        date: null,
        reminder: false,
    });

    const onSubmit = (e) => {
        e.preventDefault();
        if (!values.text) {
            alert('Please add an item!');
            return;
        }
        onSubmitForm(values);
        setValues({
            text: '',
            day: '',
            date: null,
            reminder: false,
        });
    };

    const handleformChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Item</label>
                <input 
                    type='text'
                    name='text'
                    placeholder='Add Item' 
                    value={values.text} 
                    onChange={handleformChange}  
                />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <DatePicker
                    name='date'
                    selected={values.date === null ? new Date() : values.date }
                    onChange={(date) => setValues({
                        ...values,
                        date
                    })}
                />
            </div>
            <div className='form-control'>
                <label>Time</label>
                <input 
                    type='text'
                    name='day'
                    placeholder='Add Day & Time'
                    value={values.day} 
                    onChange={handleformChange}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                    type='checkbox'
                    name='reminder'
                    checked={values.reminder}
                    value={values.reminder} 
                    onChange={handleformChange} 
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

const mapDispatchToProps = (dispatch) => ({
    onSubmitForm: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(AddItem);
