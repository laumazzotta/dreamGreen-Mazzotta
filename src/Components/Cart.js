import { useContext } from "react";
import { CartContext } from "./CartContext";
import { BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";

// import { serverTimestamp, doc, collection, setDoc, updateDoc, increment } from "firebase/firestore";
// import db from '../utils/firebaseConfig';



const Cart = () => {

    const context = useContext(CartContext);

    if (context.cartList.length > 0) {
        return (
            <>
            <h1 className="text-center fs-3 bg-secondary text-primary m-0 py-3">Carrito de compras</h1>
            <section className="row bg-primary border-bottom mw-100 m-0">
                <div className="col-12 col-lg-8 p-0 bg-white">
                {context.cartList.map(item =>
                    <div key={item.idItem} className="mx-auto row row-cols-2 row-cols-lg-4 px-0 py-4 py-lg-0 align-items-center w-100 items-carrito">
                        <div className="col p-0">
                            <Link to={`/item/${item.idItem}`}>
                                <img src={item.imgItem} alt='productos' height="150" width="150" />
                            </Link>
                        </div>
                        <div className="col">
                            <h4>{item.nameItem}</h4>
                            <p>Precio unitario: ${item.priceItem}</p>
                        </div>
                        <div className="col pt-4 pt-lg-0">
                            <div className="row align-items-center mx-auto w-50">
                            
                            {
                                (item.cantItem > 1)
                                ? <button className="btn btn-secondary col p-0 btn-carrito rounded-circle" onClick={() => context.restarCantidad(item.idItem, 1)}>-</button>
                                : <button disabled className="btn btn-outline-secondary col p-0 btn-carrito rounded-circle " >-</button>
                            }
                            <p className="text-center col mb-0">{item.cantItem}</p>
                            {
                                (item.stockItem > 0) 
                                ? <button className="btn btn-primary col p-0 btn-carrito rounded-circle" onClick={() => context.aumentarCantidad(item.idItem, 1)}>+</button>
                                : <button disabled className="btn btn-outline-primary col p-0 btn-carrito rounded-circle" >+</button>
                            }
                            </div>
                            
                        </div>
                        <div className="col text-center pt-4 pt-lg-0">
                            <BsTrashFill onClick={() => context.deleteItem(item.idItem)} role="button" className="text-primary text-center fs-3 boton-delete"/>
                        </div>
                    </div>
                )}
                </div>
            
                <div className="col p-5 text-white align-self-center">
                    <h3 className="mb-5 text-center">Resumen de tu compra</h3>
                    <p>Subtotal:<span className="float-end"> ${context.subtotal()}</span></p>
                    <p className="fw-light">Impuestos (IVA 21%): <span className="float-end">$ {context.taxes()}</span></p>
                    <hr/>
                    <p className="fw-bold fs-4">TOTAL: <span className="float-end">${context.total()}</span></p>
                    {/* <button onClick={createOrder} className="btn btn-light mt-2 boton-light w-100">FINALIZAR COMPRA</button> */}
                    <Checkout/>
                </div>
            </section>
            <section className="py-4 px-3">
                <Link to='/' className="text-decoration-none text-white"><button className="btn btn-primary m-3">Volver al catálogo</button></Link>
                <button onClick={(context.removeList)} className="btn btn-secondary m-3 float-end">Vaciar carrito</button>
            </section>
            </>
        );
    }
    
    return (
        <>
            <h1 className="text-center fs-3 bg-secondary text-primary m-0 py-3">Carrito de compras</h1>
        
            <div className="vh-50 position-relative">
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <p className="text-center fs-3"> &#128549; <br/>Tu carrito está vacío</p>
                            <Link to='/' className="text-decoration-none">
                                <button className="btn btn-success mx-auto d-block my-3">Ir al catálogo</button>
                            </Link>
                        </div>
                    </div>

        </>
    );

}

export default Cart;