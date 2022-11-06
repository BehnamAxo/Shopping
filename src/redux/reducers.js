import { combineReducers  } from 'redux';
import { ADD_ITEM , DELETE_ITEM, FETCH_ITEM, FETCH_ITEMS } from './types';


const intialState = {
    items: [],
    item: {}
};

const itemReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
             debugger;
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        }

        case DELETE_ITEM: {
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload )
            }
        }

        case FETCH_ITEMS: {
            return {
                ...state,
                items: action.payload
            };
        }

        case FETCH_ITEM: {
            console.log('FETCH_ITEM');
            return state;
        }

        default: 
            return state;
    }
};

const rootReducer = combineReducers({
    posts: itemReducer
});

export default rootReducer;
