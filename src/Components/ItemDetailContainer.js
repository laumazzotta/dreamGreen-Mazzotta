import ItemDetail from './ItemDetail';
import customFetch from './customFetch';
import { useEffect, useState } from 'react';
const { products } = require('./ProductsDetail');

const ItemDetailContainer = () => {
    
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

        <div className="row row-cols-1 row-cols-lg-4">
            <ItemDetail items={datos} />
        </div>

        </>

    );

}

export default ItemDetailContainer;