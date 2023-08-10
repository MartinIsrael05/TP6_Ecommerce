import React from 'react'
import Card from '../Components/Card'
import Header from '../Components/Header'
import NavBar from '../Components/NavBar'
import ListaCard from '../Components/ListaCard'
import fotoProducto from '../Fotos/fotoPrueba.jfif'


function Home() {

    const ListaProductos = [
        {
          "id": 1,
          "nombre": "Camiseta",
          "precio": 20.99,
          "categoria": "Ropa",
          "foto": fotoProducto,
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
    <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">Compre com estilo</h1>
                <p class="lead fw-normal text-white-50 mb-0">Com esta homenagem da loja</p>
            </div>
        </div>
    </header>

    <div class="col mb-5">
                        <div class="cardIndividual">  
                            <img class="card-img-top" src= {fotoProducto} alt="..."/>     
                            <div class="card-body p-4">
                                <div class="text-center">    
                                    <h5 class="fw-bolder"><span>Computadora</span></h5>
                                    
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default Home