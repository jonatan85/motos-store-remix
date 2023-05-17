import { Link } from "@remix-run/react";

function Motocileta({motocicleta}) {
    const {img, name, description, price, url } = motocicleta
    return (
    <div className="motocicleta">
        <div className="img">
            <img src={img}  alt={`Imagen de la ${name}`} />
        </div>
        <div className="contenido">
            <h3 className="name">{name}</h3>
            <p className="descripcion">{description}</p>
            <p className="precio">Precio: {price}</p>

            <Link className="enlace" to={`/motocicletas/${url}`}>Ver Motocicleta</Link>
        </div>
    </div>
  )
}

export default Motocileta