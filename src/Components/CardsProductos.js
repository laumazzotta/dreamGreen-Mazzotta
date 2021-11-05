import ItemCount from './ItemCount.js';
import bolsas_compostables from './Images/bolsas_compostables.jpeg';
import backpack from './Images/backpack.png';
import cubiertos from './Images/cubiertos.jpeg';

const CardsProductos = () => {

    return (
        <>
        <div className="fs-3 bg-secondary text-primary text-center py-3">Productos destacados</div>
        <div className="card-group">
            <div className="card">
                <img src={bolsas_compostables} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <ItemCount stock={10} inicial={1} />
                </div>
            </div>
            <div className="card">
                <img src={backpack} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <ItemCount stock={10} inicial={1} />
                </div>
            </div>
            <div className="card">
                <img src={cubiertos} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <ItemCount stock={10} inicial={1} />
                </div>
            </div>
        </div>

        </>

    );

}

export default CardsProductos;