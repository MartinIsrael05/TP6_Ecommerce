import React from "react"
import Card from "./Card"

export default function ListadoCitas({card,detalle}) {
   //recorrer el array con un map y crear la cita
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
  