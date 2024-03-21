import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { db } from "../../service/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {

  const { itemId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState(null);
  
  const getProdDB = (itemId) => {
    setIsLoading(true); 
    const prodRef = doc(db,"products", itemId)
    
    getDoc(prodRef)
      .then(response => {
        const product = {id: response.id, ...response.data()}
        setItem(product)
        setIsLoading(false)
      })
      .catch(error => {console.log(error)})
  }

  useEffect(() => { 
    getProdDB(itemId)
   }, [itemId])

  return (
    <>
      <div className="container d-flex justify-content-center rounded p-3">
        { isLoading ? <h2>Cargando producto ...</h2> : item && <ItemDetail {...item} />}
      </div>
    </>
  )
}
