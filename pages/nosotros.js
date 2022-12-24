import Layout from "../components/layout"
import Image from "next/image"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
    return (
        <>
            <Layout
                title={"Nosotros"}
                description={'Sobre nosotros, guitarLA, tienda de música'}
            >
                <main className="contenedor">
                    <h2 className="heading">Nosotros</h2>
                    <div className={styles.contenido}>
                        <Image src='/img/nosotros.jpg' width={1000} height={800} alt='imagen sobre nosotros' />
                 
                    <div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti tempora esse ipsa ex
                             quo laborum quasi! Voluptatem nesciunt laborum veniam in tenetur a perferendis distinctio animi alias
                              odit. Rerum id possimus eos consequuntur ipsum ratione velit labore inventore officiis temporibus at 
                              facere impedit sit, porro sint esse, repudiandae exercitationem aliquam nesciunt ipsa quia necessitat.
                        </p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti tempora esse ipsa ex
                             quo laborum quasi! Voluptatem nesciunt laborum veniam in tenetur a perferendis distinctio animi alias
                              odit. Rerum id possimus eos consequuntur ipsum ratione velit labore inventore officiis temporibus at.     
                        </p>
                    </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}