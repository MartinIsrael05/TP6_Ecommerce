import React from 'react'
import fotoProducto from '../../fotoProducto'

function Card(card,detalle) {
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
    <div class="col mb-5">
                        <div class="cardIndividual">  
                            <img class="card-img-top" src= {card.foto} alt="..."/>     
                            <div class="card-body p-4">
                                <div class="text-center">    
                                    <h5 class="fw-bolder"><span>{card.nombre}</span></h5>
                                    
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
  )
}

export default Card