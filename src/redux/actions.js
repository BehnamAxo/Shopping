import { FETCH_ITEM, FETCH_ITEMS } from './types';

const baseURL = 'http://localhost:5000/items/';


const fetchItemsSuccess = items => ({
    type: FETCH_ITEMS,
    payload: items
});


export const fetchItems =  () => {
    return async dispatch => {
        try {
            const res = await fetch(baseURL);
            const data = await res.json();
            dispatch(fetchItemsSuccess(JSON.stringify(data)));
        }
        catch(e){
            console.log(`Error: ${e}`);
        }
    }
}

// export const fetchItems = () => async (dispatch) => {
//     const res = await fetch(baseURL);
//     const data = await res.json();

//     console.log('Hello');
//     dispatch({
//         type: FETCH_ITEMS,
//         payload: JSON.stringify(data)
//     });
// };
