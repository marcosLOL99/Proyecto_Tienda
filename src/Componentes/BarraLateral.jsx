import { Filtros } from "./Filtros";

export function BarraLateral({cambiarFiltro}) {
    return (
        <aside className="sidebar">
            <h2>Filtros</h2>
            <Filtros cambiarFiltro={cambiarFiltro}/>
        </aside>
        
    );
    }