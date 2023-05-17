import { Link, useLocation } from "@remix-run/react"
import imgCarrito from '../../public/img/carrito.png';

function Navegacion() {
    
    const location = useLocation()

    return (
        <nav className="navegacion">
                    <Link
                        to="/index"
                        prefetch="render"
                        className={location.pathname === '/' ? 'active' : ''}
                    > Inicio
                    </Link>

                    <Link
                        to="/nosotros"
                        prefetch="render"
                        className={location.pathname === '/nosotros' ? 'active' : ''}
                    > Nosotros
                    </Link>

                    <Link
                        to="/tienda"
                        prefetch="render"
                        className={location.pathname === '/tienda' ? 'active' : ''}
                    > Tienda
                    </Link>

                    <Link
                        to="/carrito"
                    > 
                    <img src={imgCarrito} alt="imagen carrito de compras"/>
                    </Link>

                </nav>
    )
}

export default Navegacion