import { Link } from "react-router-dom";

export const Item = ({ id, name, img, description }) => {
  return (
    <div className="border m-2">
      <div className="card " >
        <div className="card-body text-center rounded p-3" style={{ backgroundColor: 'gray', borderColor: 'black' }}>
          <h5 className="card-title">{name}</h5>
          <img src={img} width="100" height="100" alt="" />
          <p className="card-text"> {description} </p>
          <Link to={`/item/${id}`} >
            <button>Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
