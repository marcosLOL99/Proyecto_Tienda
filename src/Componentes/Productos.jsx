import './Productos.css';
import { AddToCartIcon } from './Icons';

export function Productos({ productos }) {
  return (
    <section className='productos'>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            <img src={producto.imagen} alt={producto.titulo} />
            <div>
              <strong>{producto.titulo}</strong> - {producto.precio}€
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}