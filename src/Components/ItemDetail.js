import Item from "./Item";

const ItemDetail = ({items}) => {

    return (
        items.length > 0
        ? items.map(item => <Item key={item.id} name={item.name} price={item.price} image={item.image} description={item.description} category={item.category} />)
        : <p>Cargando producto...</p>
    );
}

export default ItemDetail;