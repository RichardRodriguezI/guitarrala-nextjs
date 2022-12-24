import Link from "next/link"
import styles from '../styles/guitarras.module.css'
import { imgUrl } from '../pages/_app'

export default function Guitarras({guitarra}) {
      const { descripcion, nombre, imagen, url, precio} = guitarra

      const urlImg = imgUrl(imagen.data.attributes.formats.medium.url);

  return (
    <div className={styles.guitarra} >
        <img src={urlImg} width={600} height={400}  alt={`Imagen guitarra ${nombre}`}/>

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
