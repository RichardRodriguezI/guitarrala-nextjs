import Layout from "../components/layout"
import Link from "next/link"
export default function Error404() {
  return (

    <Layout
    title="Pagina No Encontrad  a"
    >
        <p className="error">Pagina No Encontrada</p>
        <Link href='/' className="error-enlace">
         Ir a Inicio
        </Link>
    </Layout>
  )
}
