import { useContext } from "react";
import { CartContext } from "./CartContext";
import { BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const Cart = () => {

    const context = useContext(CartContext);

    if (context.cartList.length > 0) {
        return (
            <>
            <h1 className="text-center fs-3 bg-secondary text-primary m-0 py-3">Carrito de compras</h1>
            <section className="row bg-primary border-bottom mw-100 m-0">
                <div className="col-8 p-0 bg-white">
                {context.cartList.map(item =>
                    <div key={item.idItem} className="mx-auto row row-cols-1 row-cols-lg-4 w-75 p-0 align-items-center w-100 items-carrito">
                        <div className="col p-0">
                            <img src={item.imgItem} alt='productos' height="150" width="150" />
                        </div>
                        <div className="col">
                            <h4>{item.nameItem}</h4>
                        </div>
                        <div className="col">
                            <p>Cantidad: {item.cantItem}</p>
                            <p>Precio unitario: ${item.priceItem}</p>
                        </div>
                        <div className="col text-center">
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
                    <button className="btn btn-light mt-2 boton-light w-100">FINALIZAR COMPRA</button>
                </div>
            </section>
            <Link to='/'><button className="btn btn-primary m-3 float-start">Volver al catálogo</button></Link>
            <button onClick={(context.removeList)} className="btn btn-secondary m-3 float-end">Vaciar carrito</button>
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