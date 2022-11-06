import Item from "./Item";

const Items = ({ items }) => (
    <div>
        { items.map((item) => (<Item key={item.id} item={item} />)) }
    </div>
);

export default Items;
