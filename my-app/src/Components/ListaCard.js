import React from "react"
import Card from "./Card"

export default function ListadoCitas({card,detalle}) {
   //recorrer el array con un map y crear la cita
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
   console.log(card)
    return (
     <>
       {card.map((item)=> (
        <div key = {item.foto} className="col-3 margin-top">
          <Card key={item.foto} cita={item} detalle={detalle} />
        </div>

       ))}
  
     </>
    )
  }
  