import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addToCart = (item, cantAgregada) => {
        let found = cartList.find(product => product.idItem === item.id);
        if (found === undefined) {
        setCartList([
            ...cartList,
            {
                idItem: item.id,
                imgItem: item.image,
                nameItem: item.name,
                priceItem: item.price,
                cantItem: cantAgregada
            }
        ]);
        } else {
            found.cantItem += cantAgregada;
        }
    }

    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id);
        setCartList(result);
    }



    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeList,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    );
}


export default CartContextProvider;
