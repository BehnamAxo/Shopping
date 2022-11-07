import { combineReducers  } from 'redux';
import { 
    ADD_ITEM,
    DELETE_ITEM,
    HIDE_DELETE_MODAL,
    FETCH_ITEMS,
    SHOW_ITEM_FORM,
    SHOW_DELETE_MODAL,
    TOGGLE_REMINDER 
} from './types';


const intialState = {
    deleteModal: {
        id: null,
        showModal: false
    },
    items: [],
    item: {},
    showForm: false
};

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            return {
                ...state,
                showForm: !state.showForm,
                items: [...state.items, action.payload]
            }
        }

        case DELETE_ITEM: {
            return {
                ...state,
                deleteModal: {
                    id: null,
                    showModal: false
                },
                items: state.items.filter((item) => item.id !== action.payload )
            }
        }

        case HIDE_DELETE_MODAL: {
            return {
                ...state,
                deleteModal: {
                    id: null,
                    showModal: false
                }
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

        case SHOW_DELETE_MODAL: {
            return {
                ...state,
                deleteModal: {
                    id: action.payload,
                    showModal: true
                }
            }
        }

        case TOGGLE_REMINDER: {
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
