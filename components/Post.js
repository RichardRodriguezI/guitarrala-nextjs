import { imgUrl } from '../pages/_app'
import Link from 'next/link';
import styles from '../styles/blog.module.css'
import { formatearFecha } from '../utils/helpers'

export default function Post({post}) {

    const { titulo, contenido, imagen,publishedAt, url} = post
    const urlImg = imgUrl(imagen.data.attributes.formats.medium.url);

  return (
    <article>
        <img src={urlImg} alt={`Imagen blog ${titulo}`} width={600} height={400}/>
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          <p className={styles.resumen}>{contenido}</p>
          <Link className={styles.enlace} href={`/blog/${url}`}>
          Leer Post
          </Link>
        </div>
    </article>
  )
}