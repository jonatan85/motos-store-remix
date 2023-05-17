import { useLoaderData } from "@remix-run/react";
import { getMotocicletas } from "~/models/motocicletas.server.js";
import Motocileta from "~/components/motocileta.jsx";
import styles from '~/styles/motocicletas.css'

export function meta() {
  return [
    {
      title: 'Motos TZ - Sobre nosotros',
      // Etiqueta recomendada para el SEO.
      description: 'Venta de motos en Santurtzi'
    }
  ]
}
// Utilizamos links para las hojas de estilo.
export function links() {
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


function Index() {
  const motocicletas = useLoaderData();
  return (
    <>
      <main className="contenedor">
        <h2 className="heading">Nuestras Motocicletas</h2>

        {motocicletas.length && (
          <div className="motocicletas-index"> 
              {motocicletas.map(motocicleta => (
                <Motocileta 
                key={motocicleta._id}
                motocicleta={motocicleta}
                />
              ))}
          </div>
        )}
      </main>
    </>
  )
}

export default Index