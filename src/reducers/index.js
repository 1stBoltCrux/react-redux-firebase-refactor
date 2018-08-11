import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});

// As our reducer names are identical to what we want to use for a store's property names, we can use the ES6 shorthand.
