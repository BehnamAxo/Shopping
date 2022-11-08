import * as R from 'ramda';
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

const mapStateToProps = ({ currentState }) => ({
    items: currentState.items
});

export default connect(mapStateToProps)(Items);
