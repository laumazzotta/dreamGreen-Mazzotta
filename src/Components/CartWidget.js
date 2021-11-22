import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Cart = () => {

    return (
        <>
            <Link to='/Cart'>
                <div className="fs-1 text-primary px-3">
                    <BsFillCartFill />
                </div>
            </Link>
            
        </>
    );

}

export default Cart;