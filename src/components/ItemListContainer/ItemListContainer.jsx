import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainerStyle.css'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  const { categoryId } = useParams()

  const getProdDB = (category) =>{
    const myProducts = category 
      ? query(collection(db, "products"), where( "category", "==", category )) 
      : collection(db, "products")

      getDocs(myProducts)
        .then(response =>{
        const prodList = response.docs.map(doc => {
          const item = {
            id: doc.id,
            ...doc.data()
          }
          return item;
        })
        setProducts(prodList)
        setIsLoading(false)
      })
      .catch(error => {console.log(error)})
  }

  useEffect( () => { 
    getProdDB(categoryId)
  }, [categoryId])

  return (
    <> 
      <div className="container d-flex justify-content-between rounded p-3 content">  
        { isLoading ? <h2 className="text-red">Cargando productos ...</h2> : <ItemList products={products}/> }
      </div>
    </>
  )
}