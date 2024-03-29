import Layout from "../components/layout"
import Post from "../components/Post"
import styles from '../styles/grid.module.css'

export default function Nosotros({blogs}) {

    return (
      <>
    <Layout
    title={"Blog"}
    description={'Blog de música, venta de guitarras, consejos, GuitarLA'}
    >
      <main className="contenedor">
         <h1 className="heading">Blog</h1>
         <div className={styles.grid}>
            {blogs?.map( post => (
                  <Post 
                key={post.id}
                post={post.attributes}  
                  />
            ))}
         </div>
      </main>
    </Layout>
      </>
    )
}
export async function getStaticProps() {
   const respuesta = await fetch(`${process.env.API_URL}/blogs?populate=imagen`)
   const {data: blogs} = await respuesta.json()

   return {
    props: {
      blogs
    }
   }
}