import ItemDetail from './ItemDetail';
import customFetch from './customFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const { products } = require('./ProductsDetail');

const ItemDetailContainer = () => {
    
    const [datos, setDatos] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
            customFetch(1000, products.find(item => item.id === parseInt(idItem)))
                .then(result => setDatos(result))
                .catch(err => console.log(err))
    }, [idItem]);

    return (
        <>

        <div className="row row-cols-1 row-cols-lg-4">
            <ItemDetail item={datos} />
        </div>

        </>

    );

}

export default ItemDetailContainer;