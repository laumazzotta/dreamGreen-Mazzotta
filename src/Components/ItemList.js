import Item from "./Item";

const ItemList = ({items}) => {
    return (
        items.length > 0
        ? items.map(item => <Item key={item.id} title={item.name} price={item.price} image={item.image} description={item.description} />)
        : <p>Cargando productos...</p>
    );
}

export default ItemList;