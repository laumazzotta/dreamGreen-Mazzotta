import React, { useContext } from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';


const Cart = () => {

    const context = useContext(CartContext);

    return (
        <>
            <Link to='/Cart'>
                {
                    (context.cartList.length > 0)
                    ? <div className="fs-1 text-primary px-3 cart-widget position-relative">
                        <BsFillCartFill /> 
                            <span className="bagde-carrito fs-6 position-absolute badge border border-light rounded-circle bg-danger">
                            {context.calcularTotalItems()}
                            </span>
                    </div>
                    :   <div className="fs-1 text-primary px-3 cart-widget position-relative">
                            <BsFillCartFill /> 
                        </div>
                }
                
            </Link>
            
        </>
    );

}

export default Cart;