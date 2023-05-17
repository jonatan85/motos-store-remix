import { useState, useEffect } from 'react';
import { useOutletContext } from '@remix-run/react';
import { ClientOnly } from 'remix-utils';
import styles from '~/styles/carrito.css';


export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export function meta() {
    return [
      {
        title: 'Motos TZ - Sobre nosotros',
        description: 'Venta de motos en Santurtzi'
      }
    ]
  }

function Carrito() {
  const [total, setTotal] = useState(0);
  const {carrito, actualizarMotocicleta, eliminarMotocicleta} = useOutletContext();

  useEffect(() => {
    const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.price), 0)
    setTotal(calculoTotal)
  },[carrito])

  return (
    <ClientOnly fallback={'cargando....'}>
      {() => (
      <main className="contenedor">
          <h1 className="heading"> Carrito de Compras</h1>

          <div className="contenido">
            <div className='carrito'>
              <h2>Articulos</h2>
              {carrito?.length === 0 ? 'Carrito Vacio' : (
                carrito?.map( producto => (
                  <div key={producto._id} className='producto'>
                    <div>
                      <img src={producto.img} alt={`imagen de el producto ${producto.name}`} />
                    </div>
                    <div>
                      <p className='nombre'>{producto.name}</p>
                      <p>Cantidad:</p>

                      <select
                        value={producto.cantidad}
                        className='select'
                        onChange={ event => actualizarMotocicleta({
                          cantidad: parseInt(event.target.value),
                          _id: producto._id
                        })}
                      >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                      </select>

                      <p className='precio'>$ <span>{producto.price}</span></p>
                      <p className='subtotal'>Subtotal: $ <span>{producto.cantidad * producto.price}</span></p>
                    </div>

                      <button
                        type='button'
                        className='btn_eliminar'
                        onClick={() => eliminarMotocicleta(producto._id)}
                      >
                        X
                      </button>  

                  </div>
                ))
              )}
            </div>
          </div>
          
          <aside className="resumen">
              <h3>Resumen del Pedido</h3>
              <p>Total a pagar: ${total}</p>
          </aside>
      </main>
      )}
    </ClientOnly>
  )
}

export default Carrito