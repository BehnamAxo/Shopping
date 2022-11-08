import * as R from 'ramda';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import Item from "./Item";

const Items = ({ items }) => {
    console.log('Items.js');
    return (
        <>
            { items.length > 0 ? items.map((item) => (<Item key={item.id} item={item} />)) : <h3>Shopping cart empty</h3> }
        </>
    )
};

const itemsSelector = (state) => state.items;
const itmSelector = createSelector(
    itemsSelector,
    (items) => R.sort(R.ascend, items)
);

const mapStateToProps = ({ currentState }) => ({
    items: itmSelector(currentState)
});

export default connect(mapStateToProps)(Items);
