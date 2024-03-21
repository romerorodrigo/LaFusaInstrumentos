import { useState } from "react";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [qty, setQty] = useState(initial);

  const increment = () => {
    if (qty < stock) 
    {
      return setQty(qty + 1);
    }
    setQty(qty);
  };

  const decrement = () => {
    if (qty === 1) 
    {
      return setQty(1);
    }
    setQty(qty - 1);
  };


    return (
    <div>
      <div className="d-flex justify-content-center">
        <button className="mx-4" onClick={decrement}> - </button>
          <h2>{qty}</h2>
        <button className="mx-4" onClick={increment}> + </button>
      </div>
      <div className="d-flex justify-content-center"> 
        <button className="Button" onClick={() => onAdd(qty)} disabled={!stock}>
          Agregar al carrito
        </button> 
      </div>
    </div>
  );
};