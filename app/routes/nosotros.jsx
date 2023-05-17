import img from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

// Escribimos el titulo de la pestaña de la web
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
    },
    // para que carge la imagen junto a el html.
    {
      rel: 'preload',
      href: img,
      as: 'image'
    }
  ]
}

function Nosostros() {
  return (
    <main className="contenedor nosotros">
        <h2 className="heading">Nosostros</h2>
        <div className="contenido">
            <img src={img} alt="imagen nosotros"/>
          <div>
            <p>
            Vivamus porttitor ultrices purus hendrerit consequat. Praesent libero metus, viverra sed posuere nec, commodo non erat. Donec vulputate lacinia ex, sed interdum massa. Vestibulum semper ipsum vel nisl lobortis, et pellentesque turpis condimentum. Mauris eleifend vulputate nibh, vulputate sagittis mi. Nunc nunc magna, consequat eu sodales in, congue porttitor erat. Proin id aliquam lectus, nec placerat diam. Nunc congue fringilla est imperdiet molestie. In scelerisque lobortis lectus ac vulputate. Praesent congue luctus orci vitae iaculis.
            </p>
            <p>
            Vivamus porttitor ultrices purus hendrerit consequat. Praesent libero metus, viverra sed posuere nec, commodo non erat. Donec vulputate lacinia ex, sed interdum massa. Vestibulum semper ipsum vel nisl lobortis, et pellentesque turpis condimentum. Mauris eleifend vulputate nibh, vulputate sagittis mi. Nunc nunc magna, consequat eu sodales in, congue porttitor erat. Proin id aliquam lectus, nec placerat diam. Nunc congue fringilla est imperdiet molestie. In scelerisque lobortis lectus ac vulputate. Praesent congue luctus orci vitae iaculis.
            </p>
          </div>
        </div>
    </main>
  )
}

export default Nosostros