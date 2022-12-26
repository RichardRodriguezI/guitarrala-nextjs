import Layout from "../../components/layout"
import styles from '../../styles/blog.module.css'
import { formatearFecha } from '../../utils/helpers'

export default function BlogUrl({blogs}) {
    const { titulo, contenido, imagen, publishedAt } = blogs[0].attributes

  return (
    <Layout >
         <article className={`${styles.post} ${styles['mt-3']}`} >
        <img src={imagen.data.attributes.url} alt={`Imagen blog ${titulo}`} width={1000} height={400}/>
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          <p className={styles.texto}>{contenido}</p>
        </div>
    </article>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {
    const respuesta = await fetch(`${process.env.API_URL}/blogs?filters[url]=${url}&populate=imagen`)
    const { data: blogs } = await respuesta.json()

    return {
       props: {
        blogs
        }
    }
}

