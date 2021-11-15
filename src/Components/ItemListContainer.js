import ItemList from './ItemList';
import customFetch from './customFetch';
import { useEffect, useState } from 'react';
const { products } = require('./ProductsDetail');

const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
            customFetch(2000, products)
                .then(result => {
                    setDatos(result)
                })
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