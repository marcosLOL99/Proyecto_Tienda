import { CartIcon, ClearCartIcon } from "./Icons";
import "./Carrito.css";
import { useState } from "react";

export function Carrito() {
    const [abierto, setAbierto] = useState(false);
    
    return (
        <>
            <button className="boton-carrito" onClick={() => setAbierto(true)}>
                <CartIcon />
            </button>

            {abierto && (
                <aside className="carrito">
                    <button className="boton-volver" onClick={() => setAbierto(false)}>
                        volver
                    </button>
                    <ul>
                        <li>
                            <img src="src/assets/img/camiseta-basica-gris.jpg" alt="camiseta" height={200} />
                            <div>
                                <strong>Camiseta</strong> - 19.99€
                            </div>
                            <footer>
                                <small>
                                    Cant: 1
                                </small>
                                <button>+</button>
                            </footer>
                        </li>
                    </ul>
                    <button>
                        <ClearCartIcon />
                    </button>
                </aside>
            )}
        </>
    );
}