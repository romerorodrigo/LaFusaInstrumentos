import { Item } from "../Item/Item"
import { ItemListCarousel } from "../ItemListCarousel/ItemListCarousel"

export const ItemList = ({products}) => {
  return (
    <div>
      <div className="d-flex justify-content-center flex-sm-wrap rounded p-3 bg-light" > 
          {<ItemListCarousel products={products}/>}
      </div>
    </div>
  )
}
