import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestoreFetchOne } from "../utils/firestoreFetch";

const ItemDetailContainer = () => {
    
    const [datos, setDatos] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    }, [idItem]);

    return (
        <>

        <div className="row row-cols-1 row-cols-lg-4 mw-100 m-0 p-lg-4">
            <ItemDetail item={datos} />
        </div>

        </>

    );

}

export default ItemDetailContainer;