import { combineReducers  } from 'redux';
import { FETCH_ITEM, FETCH_ITEMS } from './types';


const intialState = {
    items: [],
    item: {}
};

const itemReducer = (state = intialState, action) => {
    switch (action.type) {
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
