import Layout from '../components/layout'
import Guitarras from "../components/guitarra"
import Post from "../components/Post"
import Curso from '../components/curso'
import styles from '../styles/grid.module.css'
import Link from "next/link"
import stylesBlog from '../styles/grid.module.css'

export default function Home({guitarras, blogs, curso}) {
  return (
    <>
        <Layout
        title={'Inicio'}
        description={'Blog de música, venta de guitarras y más'}
        >

        <main className="contenedor">
       <h1 className="heading">Nuestra Coleccion</h1>
      <div className={styles.grid}>
      { guitarras && guitarras.map( guitarra => (
            <Guitarras
            key={guitarra.id}
            guitarra={guitarra.attributes}
            />
        ))}
      </div>
    </main>

        <Curso 
        curso={curso.attributes}
        />

        <section className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={stylesBlog.grid}>
            {blogs?.map( post => (
                  <Post 
                key={post.id}
                post={post.attributes}  
                  />
            ))}
         </div>
        </section>
        </Layout>
   </>
          )
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlblogs =` ${process.env.API_URL}/blogs?populate=imagen`
  const urlCurso =` ${process.env.API_URL}/curso?populate=imagen`

  const [ restGuitarras, resBlogs, resCurso ] = await Promise.all( [
    fetch(urlGuitarras),
    fetch(urlblogs),
    fetch(urlCurso)
  ])
  const [{data: guitarras}, {data: blogs}, {data: curso}] = await Promise.all([
    restGuitarras.json(),
    resBlogs.json(),
    resCurso.json()
  ])
  return {
    props: {
        guitarras,
        blogs,
        curso
    }
  }
}