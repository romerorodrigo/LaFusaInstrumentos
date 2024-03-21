import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import cart from '../../assets/CartWidgetImg.svg'
import { Link } from "react-router-dom";

export const CartWidget = () =>  {
    const {totalQty} = useContext(CartContext)
    return (
    <>
        <div>
            <img src={cart} alt='CartWidget' width="32" height="32"/>
            <strong>{totalQty}</strong>
        </div>
    </>
)
}