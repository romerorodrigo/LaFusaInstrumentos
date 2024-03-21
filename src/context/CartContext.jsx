import { createContext, useEffect, useState } from "react";

//contexto
export const CartContext = createContext({
    cart: []
});
//proveedor
export const CartContextProvider = ({children}) => {
    //useStates
    const [cart, setCart] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    const [total, setTotal] = useState(0);

    //Acciones con el carro
    const addItem = (item, quantity) => {
        const cCopy = [...cart];
        
        if(itemInCart(item.id)){
            cCopy[i].quantity = cCopy[i].quantity + quantity
            cCopy[i].subTotal = cCopy[i].price * cartCopy[i].quantity
            setCart(cCopy);
        }else{
            const newItem = {...item, quantity,subTotal: item.price * quantity }
            setCart([...cart, newItem])
        }
    };

    const itemInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const removeItem = (id) => {
        const cartUpd = cart.filter(item => item.id !== id)
        setCart(cartUpd);
    };

    const clearCart = () => {
        setCart([])
    };

    //Handlers para totales
    const handleTotalQty = () => {
        const newTotalQty = cart.reduce((acum, item) => acum + item.quantity, 0);
        setTotalQty(newTotalQty)
    }

    const handleTotal = () => {
        const newTotal = cart.reduce((acum, item) => acum + item.subTotal, 0);
        setTotal(newTotal)
    }

    //Eventos cuando se modifica el carro
    useEffect( () => {
        handleTotal()
        handleTotalQty()
    }, [cart])

    //Objeto contendedor del proveedor
    const objectValues = {
        cart,
        totalQty,
        total,
        addItem,
        removeItem,
        itemInCart,
        clearCart,
    }

    return <CartContext.Provider value={objectValues}> {children} </CartContext.Provider>
}