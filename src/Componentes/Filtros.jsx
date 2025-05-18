import "./Filtros.css";
import { useState } from "react";

export function Filtros({cambiarFiltro}) {
    const [minPrecio, setMinPrecio] = useState(50)

    const handleChangeMinPrecio = (event) => {
        setMinPrecio(event.target.value)
        cambiarFiltro((prevFiltro) => ({
            ...prevFiltro,
            precio: event.target.value,
        }))
    }

    const handleChangeCategoria = (event) => {
        cambiarFiltro((prevFiltro) => ({
            ...prevFiltro,
            categoria: event.target.value
        }))
    }
    
    return (
        <div className="filtros">
            <div>
                <label htmlFor="precio">Precio:</label>
                <input type="range" id="precio" name="precio" min="0" max="100" onChange={handleChangeMinPrecio}/>
                <span>{minPrecio}€</span>
            </div>
            <div>
                <label htmlFor="categoria">Categoria:</label>
                <select id="categoria" name="categoria" onChange={handleChangeCategoria}>
                    <option value="all">Todas</option>
                    <option value="camisetas">Camisetas</option>
                    <option value="pantalones">Pantalones</option>
                    <option value="sudaderas">Sudaderas</option>
                </select>
            </div>
        </div>
    );
}
