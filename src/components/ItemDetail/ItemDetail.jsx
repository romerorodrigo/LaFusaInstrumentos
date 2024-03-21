import { useContext, useState } from "react";
import {ItemCount} from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './ItemDetailStyle.css'
import Swal from "sweetalert2";

export const ItemDetail = ({ id, name, description, img, price, stock, category }) => {
  const [qtyAdded, setQtyAdded] = useState(0)
  const {addItem} = useContext(CartContext)

  const handleOnAdd = ( quantity ) => {
    setQtyAdded(quantity);
    const item = {
        id,
        price,
        name,
        img
    }
    addItem(item, quantity);
    
    Swal.fire({
      title: 'Info',
      text: 'El producto fue agregado con éxito',
      icon: 'success',
      customClass: {
        container: 'bg-dark text-white', 
        popup: 'bg-dark border border-white text-white',
        confirmButton: 'bg-dark text-white'
      },
    })

  }

  const navAnt = `/category/${category}`;
    return (
    <div className="border m-3 rounded-3">
      <div className="card" >
        <div className="card-body text-center contentd2" >
          <h3 className="card-title">{name}</h3>
          <img src={img} alt="" />
          <p className="card-text text-lg"> {description} </p>
          <p>Precio: {price} </p>
          <p>Stock: {stock} </p>
          <div className="container">
            {
              qtyAdded > 0 
                       ?(<Link to='/cart' className="btn btn-dark">Ir al carrito</Link>)
                       :(<ItemCount stock={stock} onAdd={handleOnAdd} />)
            }
          </div>
        </div>
      </div>
        <Link to={navAnt}>
          <button className="Button">Volver</button>
        </Link>
    </div>
  );
};
