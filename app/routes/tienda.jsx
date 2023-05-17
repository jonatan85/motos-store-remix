import { useLoaderData } from "@remix-run/react";
import { getMotocicletas } from "~/models/motocicletas.server"
import Motocileta from "~/components/motocileta";

import styles from '~/styles/motocicletas.css'


export function meta() {
  return [
    {  
      title: 'Motos TZ - Tienda de Motos Tradicional Tradicional',
      description: 'Motos TZ - Todas Nuestras Motos'
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

export async function loader() {
  const motocicletas = await getMotocicletas();
  return motocicletas;
}

function Tienda() {
  const motocicletas = useLoaderData();

  return (
    <main className="contenedor">
        <h2 className="heading">Nuestras Motocicletas</h2>

        {motocicletas.length && (
          <div className="motocicletas-grid"> 
              {motocicletas.map(motocicleta => (
                <Motocileta 
                key={motocicleta._id}
                motocicleta={motocicleta}
                />
              ))}
          </div>
        )}
    </main>
  )
}

export default Tienda