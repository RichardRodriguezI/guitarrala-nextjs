import Layout from '../components/layout'
import { useState, useEffect  } from 'react'
import styles from '../styles/carrito.module.css'


export default function Carrito({carrito, actualizarCantidad, eliminarGuitarra}) {
   const [total, setTotal] = useState(0)

   useEffect( () => {
     const calcularTotal = carrito.reduce( (total, producto) => total + (producto.precio * producto.cantidad), 0)
      setTotal(calcularTotal)
   }, [carrito])
  return (
    <Layout title='Carrito de Compras'>
        <main className="contenedor">
            <h1 className='heading'>Carrito</h1>
            <div className={styles.contenido}>
              <div className={styles.carrito}>
                <h2>Articulos</h2>
                { carrito.length  === 0 ? 'Carrito Vacio' : (
                    carrito.map( producto => (
                      <div key={producto.id} className={styles.producto}>
                        <div>
                        <img width={450} height={400} src={producto.imagen} alt={producto.nombre}/>
                        </div>
                        <div>
                        <p className={styles.nombre}>{producto.nombre}</p>
                          <div className={styles.cantidad}>
                              <p>Cantidad:</p>
                            <select className={styles.select}
                            onChange={ e => actualizarCantidad( {
                              cantidad: e.target.value,
                              id: producto.id
                            })}
                            value={producto.cantidad}
                            >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                          </div>
                        <p className={styles.precio}>${producto.precio}</p>
                        <p className={styles.subtotal}>Subtotal: $<span>{producto.cantidad * producto.precio}</span></p>
                        </div>
                        <button
                        className={styles.btnEliminar}
                        type='button'
                        onClick={() => eliminarGuitarra(producto.id)}
                        >
                          X
                        </button>
                      </div>
                     
                    ))
                )}
              </div>
              <aside className={styles.resumen}>
                <h3>Resumen del Pedido</h3>
                <p>Total a Pagar: ${total}</p>
              </aside>
            </div>
        </main>
    </Layout>
  )
}
