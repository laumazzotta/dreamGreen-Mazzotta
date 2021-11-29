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

    const precioTotalPorItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].priceItem * cartList[index].cantItem;
    }

    const subtotal = () => {
        let totalPorItem = cartList.map(item => precioTotalPorItem(item.idItem));
        return totalPorItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const taxes = () => {
        return subtotal() * 0.21;
    }

    const total = () => {
        return subtotal() + taxes();
    }

    const calcularTotalItems = () => {
        let totalItems = cartList.map(item => item.cantItem);
        return totalItems.reduce(((previousValue, currentValue) => previousValue + currentValue), 0)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeList,
            deleteItem,
            precioTotalPorItem,
            subtotal,
            taxes,
            total,
            calcularTotalItems
        }}>
            {children}
        </CartContext.Provider>
    );
}


export default CartContextProvider;
