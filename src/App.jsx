import { Productos } from './Componentes/Productos.jsx'
import { productos } from './bbdd/productos.json'
import { BarraLateral } from './Componentes/BarraLateral.jsx'
import { Header } from './Componentes/Header.jsx'
import './App.css'
import { usoDeFiltros } from './Funciones/usoDeFiltros.js'
import { Carrito } from './Componentes/Carrito.jsx'
//import { useState } from 'react'


function App() {
  const { filtrarProductos} = usoDeFiltros()
  const productosFiltrados = filtrarProductos(productos)

  return (
    <>
      <Header />
      <br />
      <main className='main-layout'>
        <BarraLateral />
        <Productos productos={productosFiltrados}/>
      </main>
    </>
    
  )
}

export default App
