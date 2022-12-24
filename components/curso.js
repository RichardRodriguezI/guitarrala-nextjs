import styles from '../styles/curso.module.css'
import { imgUrl } from '../pages/_app'

export default function Curso({curso}) {
    const { contenido, imagen, titulo} = curso
    const urlImg = imgUrl(imagen.data.attributes.formats.medium.url);
  return (
    <section className={`${styles.curso} curso`}>
        <style>
            {`
            .curso {
                background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), 
                url(${urlImg})
            }`}
        </style>
        <div>
            <div>
                <h2 className="heading">{titulo}</h2>
                <p>{contenido}</p>
            </div>
        </div>
    </section>
  )
}
