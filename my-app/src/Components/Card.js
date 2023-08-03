import React from 'react'

function Card(card,detalle) {
  return (
    <div class="col mb-5">
                        <div class="cardIndividual">  
                            <img class="card-img-top" src= {card.foto} alt="..."/>     
                            <div class="card-body p-4">
                                <div class="text-center">    
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    $120.00 - $280.00
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