import { useLoaderData, useOutletContext } from '@remix-run/react';
import {getMotocicleta} from '~/models/motocicletas.server'
import styles from '~/styles/motocicletas.css'
import { useState } from 'react';

export function meta({data}) {
    if(!data) {
        return [
            {  
                title: `Motos no encontrada`,
                description: `Motos TZ - venta de motocicletas, motocicleta ${data.name}`
            }
        ]
    }
    return [
      {  
        title: `Motos TZ - ${data.name}`,
        description: `Motos TZ - venta de motocicletas, motocicleta ${data.name}`
      }
    ]
    
  }

export function links () {
    return [
      {
        rel: 'stylesheet',
        href: styles
      }
    ]
  }

export async function loader({params}) {
    
    const {motociletaUrl} = params
    
    const motocicleta = await getMotocicleta(motociletaUrl)
  
    // Si no se encuentra el error.
    if(motocicleta.url.length === 0) {
        throw new Error('',{
            status: 404,
            statusText: 'Motocicleta no encontrada'
        })
    }
    return motocicleta;
}


function Motocicleta() {
    const { agregarCarrito } = useOutletContext();
    const [cantidad, setCantidad] = useState(0);
    const motocicleta = useLoaderData()
    const {img, description, name, price, _id} = motocicleta;


    const handleSubmit = event => {
      event.preventDefault();
      // Para seleccionar al menos 1 en catidad si no te salta una alerta.
      if(cantidad < 1) {
        alert('Debes seleccionar una cantidad')
        return
      }

      const motocicletaSeleccionada = {
        _id,
        img,
        description,
        name,
        price,
        cantidad
      }

      agregarCarrito(motocicletaSeleccionada);

    }

  return (
    <main className='contenedor motocicleta'>
        <img className='imagen' src={img} alt={`Imagen de la Motocicleta ${name}`} />

        <div className='contenido'>
            <h3>{name}</h3>
            <p className='texto'>{description}</p>
            <p className='precio'>Precio: ${price}</p>

            <form onSubmit={handleSubmit} className='formulario'>
              <label htmlFor='cantidad'>Cantidad</label>

              <select
                onChange={ event => setCantidad( parseInt(event.target.value))} 
                id='cantidad'
              >
                <option value='0'>--Seleccione--</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>

              <input
                type='submit'
                value='Agregar al Carrito'
              />
            </form>
        </div>
    </main>
  )
}

export default Motocicleta