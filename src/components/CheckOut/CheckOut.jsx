import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";
import Swal from "sweetalert2";

export const CheckOut = () => {

  const {cart, total, clearCart} = useContext(CartContext)
  const [orderId, setOrderId] = useState(null)
  const [confirmedOrder, setConfirmedOrder] = useState(null)
  const [formCheckout, setFormCheckout] = useState({
    name: "", phone: 0, email:""
  })

  // Manejador para enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newOrder = {
      buyer: formCheckout,
      items: cart,
      total,
      date: serverTimestamp()
    }

    Swal.fire({
      title: 'Compra realizada con éxito',
      text: 'Gracias por su compra, verifique su factura',
      icon: 'success',
      customClass: {
        container: 'bg-dark text-white', 
        popup: 'bg-dark border border-white text-white',
        confirmButton: 'bg-dark text-white'
      },
    })

    const order = await addDoc(collection(db, "orders"), newOrder)
    setFormCheckout({name: "", phone: 0, email:""})
    setConfirmedOrder({...newOrder})
    setOrderId(order.id)
    clearCart()
  };

  if(orderId){
    return (
      <>
        <div className="container border p-4">
        <h2>Datos de la Compra</h2>
          <div className="row border p-4">
            <div className="col">
              <div><strong>Id Factura: </strong>{orderId}</div>
              <div><strong>Comprador: </strong>{orderId ? confirmedOrder.buyer.name : ""}</div>
              <div><strong>Mail: </strong> {orderId ? confirmedOrder.buyer.email : ""}</div>
              <div><strong>Teléfono: </strong> {orderId ? confirmedOrder.buyer.phone : ""}</div>
              <div className="d-flex justify-content-end align-content-end"><strong>Total de la compra $: {orderId ? confirmedOrder.total : ""}</strong></div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h3>Items:</h3>
              <div className="row  border p-1">
                <div className="col"><strong>Cantidad</strong></div>
                <div className="col"><strong>Descripción</strong></div>
                <div className="col"><strong>Precio</strong></div>
                <div className="col"><strong>Total</strong></div>
              </div>
              
              {confirmedOrder.items.map((item, index) => (
                <div className="row border p-1" key={index}>
                  <div className="col">{item.quantity}</div>
                  <div className="col">{item.name}</div>
                  <div className="col">$ {item.price.toFixed(2)}</div>
                  <div className="col">$ {item.quantity * item.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
      )
  }

  const handleName = (e) => {
    setFormCheckout({
        ...formCheckout, 
        name: e.target.value
    })
  }

  const handlePhone = (e) => {
    setFormCheckout({
        ...formCheckout, 
        phone: e.target.value
    })
  }

  const handleEmail = (e) => {
    setFormCheckout({
        ...formCheckout, 
        email: e.target.value
    })
  }

  return (
    <div className="rounded p-3" style={{ marginTop: '50px', padding: '15px', backgroundColor: 'darkgrey', color: 'black' }}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input type="text" className="form-control" id="nombre" value={formCheckout.name} onChange={handleName} required />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono:</label>
          <input type="number" className="form-control" id="telefono" value={formCheckout.phone} onChange={handlePhone} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail:</label>
          <input type="email" className="form-control" id="email" value={formCheckout.email} onChange={handleEmail} required />
        </div>
        <button type="submit" className="btn btn-dark">Finalizar Compra</button>
      </form>
    </div>
  );
};