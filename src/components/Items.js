import Item from "./Item";

const Items = ({ items, onDelete, onToggle }) => (
    <div>
        {
            items.map((item) => (
                <Item key={item.id} item={item} onDelete={onDelete} onToggle={onToggle} />
            ))
        }
    </div>
);

export default Items;
