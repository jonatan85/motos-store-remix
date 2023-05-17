import { useEffect, useState } from 'react';
import{ Meta, Links, Outlet, Scripts, LiveReload, useRouteError } from '@remix-run/react';
import styles from '~/styles/index.css';
import Header from '~/components/header.jsx';
import Footer from '~/components/footer';

export function meta() {
    return [
        { title: 'MotoStore TZ'},
        { charset: "utf-8" },
        { viewport: "width=device-width,initial-scale=1" },
        { description: "Tienda de Motocicletas" },
        { author: "Jonatan Moreno Ramos" },
    ];
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700;1,900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}  


export default function App() {
    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
    const [carrito, setCarrito] = useState(carritoLS);

    const agregarCarrito = (motocicleta) => {
        if(carrito.some(motoState => motoState._id === motocicleta._id)) {
            const carritoActualizado = carrito.map( motoState => {
                if(motoState._id === motocicleta._id) {
                    motoState.cantidad = motocicleta.cantidad
                }
                return carritoActualizado;
            })
            setCarrito(carritoActualizado)
        }else {
            setCarrito([...carrito, motocicleta]);
        }
    }

    const actualizarMotocicleta = (motocicleta) => {
        const carritoActualizados = carrito.map(motoState => {
            if(motoState._id === motocicleta._id) {
                motoState.cantidad = motocicleta.cantidad
            }
            return motoState
        })
        setCarrito(carritoActualizados);
    }

    const eliminarMotocicleta = _id => {
       const carritoActualizadoEliminado = carrito.filter( motoState => motoState._id !== _id);
       setCarrito(carritoActualizadoEliminado);
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    },[carrito])

    return(
        <Document>
            <Outlet 
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarMotocicleta,
                    eliminarMotocicleta
                }}
            />
        </Document>
    )
}

function Document({children}) {
    return(
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

// Manejo de errores con Remix.
export function ErrorBoundary() {
    
    const error = useRouteError();

      return (
        <Document>
          <p className='error'>{error.status} {error.statusText}</p>
        </Document>
      );
}

