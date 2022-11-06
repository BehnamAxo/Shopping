import { ADD_ITEM, DELETE_ITEM, FETCH_ITEM, FETCH_ITEMS } from './types';


const baseURL = 'http://localhost:5000/items/';
const addItemSucess = (id) => ({
    type: ADD_ITEM,
    payload: id
});
const fetchItemsSuccess = items => ({
    type: FETCH_ITEMS,
    payload: items
});
const deleteItemSucess = (id) => ({
    type: DELETE_ITEM,
    payload: id
});
const fetchItemSuccess = (id) => ({
    type: FETCH_ITEM,
    payload: id
});


export const addItem = (item) => {
    return async (dispatch) => {
        debugger;
        try {
            const res = await fetch(baseURL, {
                method: 'POST',
                headers: {
                'Content-type': 'application/json',
                },
                body: JSON.stringify(item)
            });

            const data = await res.json();
            dispatch(addItemSucess(data));
        } catch (e) {
            console.log(`Add item error: ${e}`);
        }
    }
}

export const fetchItems = () => {
    return async (dispatch) => {
        try {
            const res = await fetch(baseURL);
            const data = await res.json();
            dispatch(fetchItemsSuccess(data));
        }
        catch(e){
            console.log(`Fetch items error: ${e}`);
        }
    }
}

export const deleteItem = (id) => {
    return async (dispatch) => {
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
}
