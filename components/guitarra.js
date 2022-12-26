import Link from "next/link"
import styles from '../styles/guitarras.module.css'
import Image from "next/image"

export default function Guitarras({guitarra}) {
      const { descripcion, nombre, imagen, url, precio} = guitarra

  console.log(imagen.data.attributes)


  return (
    <div className={styles.guitarra} >
        <img src={imagen.data.attributes.formats.medium.url} width={600} height={400}  alt={`Imagen guitarra ${nombre}`}/>

      <div className={styles.contenido}>
      <h3>{nombre}</h3>
      <p className={styles.descripcion}>{descripcion}</p>
      <p className={styles.precio}>{precio}</p>
      <Link href={`/guitarras/${url}`} className={styles.enlace}>
        Ver Producto
      </Link>
    </div>
    </div>

  )
}
