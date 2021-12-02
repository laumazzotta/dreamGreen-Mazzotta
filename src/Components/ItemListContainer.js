import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import firestoreFetch from '../utils/firestoreFetch';

const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [idCategory]);


    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
        <>
            <div className="fs-3 bg-secondary text-primary text-center py-3">Productos destacados</div>
            <div className="row row-cols-1 row-cols-lg-4 mw-100 m-0">
                <ItemList items={datos} />
            </div>
        </>
    );
}

export default ItemListContainer;