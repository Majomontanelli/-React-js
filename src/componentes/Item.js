import "../assets/styles/Card.css";
import { Link } from 'react-router-dom';

export const Item = ({info}) => {

    return(
            <Link to={`/detalle/${info.id}`} className="card">
                <img src={info.img} alt="termo" />
                <h2 className="name-card">{info.nombre}</h2>
                <p className="desc-card">{info.descripción}</p>
                <p className="price-card">${info.precio}</p>
            </Link>
    )
}

export default Item;