import ItemList from './ItemList';
import customFetch from './customFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const { products } = require('./ProductsDetail');

const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
            customFetch(2000, products.filter(item => {
                if (idCategory === undefined) return item;
                return item.category === parseInt(idCategory)
            }))
                .then(result => setDatos(result))
                .catch(err => console.log(err))
    }, []);

    return (
        <>
        <div className="fs-3 bg-secondary text-primary text-center py-3">Productos destacados</div>
        <div className="row row-cols-1 row-cols-lg-4">
            <ItemList items={datos} />
        </div>

        </>

    );

}

export default ItemListContainer;