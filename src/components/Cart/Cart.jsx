import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import Swal from "sweetalert2";

export const Cart = () => {
  const { cart, clearCart, removeItem, totalQty, total} = useContext( CartContext )
  
  if (totalQty === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center ">
        <h3>El carrito esta vacío</h3>
      </div>
    )
  }

  const handleDeleteItem = (item) => {
    Swal.fire({
      icon: "question",
      title: `¿Desea eliminar ${item.name} del carrito? `,
      showCancelButton: true,
      showConfirmButton: true,
      customClass: {
        container: 'bg-dark text-white', 
        popup: 'bg-dark border border-white text-white',
        confirmButton: 'bg-dark text-white'
      },      
    }).then( resp => {
      if(resp.isConfirmed) {
        removeItem(item.id);
        Swal.fire({
          icon: "success",
          title: "Producto eliminado con éxito",
          customClass: {
            container: 'bg-dark text-white', 
            popup: 'bg-dark border border-white text-white',
            confirmButton: 'bg-dark text-white'
          },
        })
      }
    })
  }

  const handleClearCart = () => {
    Swal.fire({
      icon: "question",
      title: `¿Desea vaciar el carrito? `,
      showCancelButton: true,
      showConfirmButton: true,
      customClass: {
        container: 'bg-dark text-white', 
        popup: 'bg-dark border border-white text-white',
        confirmButton: 'bg-dark text-white'
      },      
    }).then( resp => {
      if(resp.isConfirmed) {
        clearCart()
        Swal.fire({
          icon: "success",
          title: "Carrito vaciado con éxito",
          customClass: {
            container: 'bg-dark text-white', 
            popup: 'bg-dark border border-white text-white',
            confirmButton: 'bg-dark text-white'
          },
        })
      }
    })
  }


  return (
    <>
    <div className="container rounded p-3 bg-dark border border-dark">
      {cart.map((item) => (
        <div key={item.id} className="d-flex flex-column p-3 my-2 rounded p-3 bg-dark border border-white ">
          <div className="row">
            <div className="col">
              <p key={item.id}>Nombre: {item.name} </p>
              <p>Cantidad: {item.quantity} </p>
              <p>Precio Unitario: {item.price} </p>
              <p>Subtotal: ${item.subTotal}</p>
              <div>
                <button className="button my-2" onClick={() => handleDeleteItem(item)}>
                  Eliminar
                </button>
              </div>
            </div>
            <div className="col">
              <img src={item.img} height="150px" width="150px" ></img>
            </div>  
          </div>            
        </div>
      ))}
    </div>
    <div className="container my-3">
        <h4><b>Total: ${total} </b></h4>
        <div className="d-flex justify-content-center m-3">
          <div>
            <button className="button my-2" onClick={() => handleClearCart()}>
              Vaciar Carrito
            </button>
          </div>
          <div>
            <Link to="/checkout">
              <button className="button my-2">
                Finalizar Compra
              </button>
            </Link>
          </div>
        </div>
    </div>
    </>
  )
}