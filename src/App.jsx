import { Productos } from './Componentes/Productos.jsx'
import { productos } from './bbdd/productos.json'
import { BarraLateral } from './Componentes/BarraLateral.jsx'
import { Header } from './Componentes/Header.jsx'
import './App.css'
import { useContext, useState } from 'react'
import { FiltroContexto } from './contexto/filtros.jsx'

function usoDeFiltros() {
  const {filtro, setFiltro} = useContext(FiltroContexto)

  const filtrarProductos = (productos) => {
    return productos.filter(producto => {
      const cumpleCategoria = filtro.categoria === 'all' || producto.categoria === filtro.categoria
      const cumplePrecio = producto.precio <= filtro.precio
      return cumpleCategoria && cumplePrecio
    })
  }
  return { filtrarProductos, setFiltro }
}

function App() {
  const { filtrarProductos, setFiltro } = usoDeFiltros()
  const productosFiltrados = filtrarProductos(productos)

  return (
    <>
      <Header />
      <br />
      <main className='main-layout'>
        <BarraLateral cambiarFiltro={setFiltro} />
        <Productos productos={productosFiltrados}/>
      </main>
    </>
    
  )
}

export default App
