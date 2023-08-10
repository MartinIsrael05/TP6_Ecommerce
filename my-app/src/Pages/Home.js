import React from 'react'
import Card from '../Components/Card'
import Header from '../Components/Header'
import NavBar from '../Components/NavBar'
import ListaCard from '../Components/ListaCard'


function Home() {
    const ListaProductos = [
        {
          "id": 1,
          "nombre": "Camiseta",
          "precio": 20.99,
          "categoria": "Ropa"
        },
        {
          "id": 2,
          "nombre": "Zapatos deportivos",
          "precio": 49.95,
          "categoria": "Calzado"
        },
        {
          "id": 3,
          "nombre": "Mochila",
          "precio": 34.75,
          "categoria": "Accesorios"
        }
      ]
  return (
    <>
    <NavBar/>
    <Header/>
    <ListaCard lista={ListaProductos}/>
    </>
  )
}

export default Home