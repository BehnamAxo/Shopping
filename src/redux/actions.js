import { 
    ADD_ITEM,
    DELETE_ITEM,
    HIDE_DELETE_MODAL,
    FETCH_ITEMS,
    SHOW_ITEM_FORM,
    SHOW_DELETE_MODAL,
    TOGGLE_REMINDER
} from './types';


const baseURL = 'http://localhost:5000/items/';
const fetchItem = async (id) => {
    const res = await fetch(`${baseURL}${id}`);
    const data = await res.json();
    return data;
};
const addItemSuccess = (id) => ({
    type: ADD_ITEM,
    payload: id
});
const fetchItemsSuccess = (items) => ({
    type: FETCH_ITEMS,
    payload: items
});
const deleteItemSucess = (id) => ({
    type: DELETE_ITEM,
    payload: id
});
const toggleReminderSuccess = (item) => ({
    type: TOGGLE_REMINDER,
    payload: item
});
const showItemFormSuccess = () => ({
    type: SHOW_ITEM_FORM
});
const showDeleteModalAction = (id) => ({
    type: SHOW_DELETE_MODAL,
    payload: id
});
const hideDeleteModalAction = () => ({
    type: HIDE_DELETE_MODAL
});


export const addItem = (item) => async (dispatch) => {
    try {
        const res = await fetch(baseURL, {
            method: 'POST',
            headers: {
            'Content-type': 'application/json',
            },
            body: JSON.stringify(item)
        });

        const data = await res.json();
        dispatch(addItemSuccess(data));
    } catch (e) {
        console.log(`Add item error: ${e}`);
    }
}

export const hideDeleteModal = () => (dispatch) => {
    dispatch(hideDeleteModalAction());
}

export const fetchItems = () => async (dispatch) => {
    try {
        const res = await fetch(baseURL);
        const data = await res.json();
        dispatch(fetchItemsSuccess(data));
    }
    catch(e){
        console.log(`Fetch items error: ${e}`);
    }
}

export const deleteItem = (id) => async (dispatch) => {
    try {
        await fetch(
            `${baseURL}${id}`, {
                method: 'DELETE'
            }
        );
        dispatch(deleteItemSucess(id));
    }
    catch(e){
        console.log(`Delete item error: ${e}`);
    }
}

export const showItemForm = () => (dispatch) => {
    dispatch(showItemFormSuccess());
}

export const showDeleteModal = (id) => (dispatch) => {
    dispatch(showDeleteModalAction(id));
}

export const toggleReminder = (id) => async (dispatch) => {
    try {
        const taskToToggle = await fetchItem(id)
        const updatedItem = { ...taskToToggle, reminder: !taskToToggle.reminder }
    
        const res = await fetch(`${baseURL}${id}`, {
            method: 'PUT',
            headers: {
            'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedItem)
        })
    
        const data = await res.json();
        dispatch(toggleReminderSuccess(data));
    }
    catch(e){
        console.log(`Toggle reminder error: ${e}`);
    }
}
