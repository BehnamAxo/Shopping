import { combineReducers  } from 'redux';
import { 
    ADD_ITEM,
    DELETE_ITEM,
    FETCH_ITEMS,
    SHOW_ITEM_FORM,
    TOGGLE_REMINDER 
} from './types';


const intialState = {
    items: [],
    item: {},
    showForm: false
};

const reducer = (state = intialState, action) => {
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

        case SHOW_ITEM_FORM: {
            return {
                ...state,
                showForm: !state.showForm
            }
        }

        case TOGGLE_REMINDER: {
            console.log('TOGGLE_REMINDER');
            return {
                ...state,
                items: state.items.map((item) => item.id === action.payload.id ? {...item, reminder: action.payload.reminder} : item)
            };
        }

        default: 
            return state;
    }
};

const rootReducer = combineReducers({
    currentState: reducer
});

export default rootReducer;
