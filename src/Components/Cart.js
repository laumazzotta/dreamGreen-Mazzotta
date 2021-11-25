import { useContext } from "react";
import { CartContext } from "./CartContext";
import { BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart = () => {

    const context = useContext(CartContext);
    
    return (
        <>
            <h1 className="text-center fs-3 bg-secondary text-primary m-0 py-3">Carrito de compras</h1>
        
            {
                (context.cartList.length > 0)
                ? context.cartList.map(item =>
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
                    )
                    
                :   <div className="vh-50 position-relative">
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <p className="text-center fs-3"> &#128549; <br/>Tu carrito está vacío</p>
                            <Link to='/' className="text-decoration-none">
                                <button className="btn btn-success mx-auto d-block my-3">Ir al catálogo</button>
                            </Link>
                        </div>
                    </div>
            }

            {
                (context.cartList.length > 0)
                ? <button onClick={(context.removeList)} className="btn btn-primary m-3 float-end">VACIAR CARRITO</button>
                : ''
            }

        </>
    );

}

export default Cart;