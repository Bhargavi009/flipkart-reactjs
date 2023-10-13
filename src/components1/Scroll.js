import React from 'react'
import '../App'
import im1 from '../images1/flights1.png'
import im2 from '../images1/amitab.png'
import im3 from '../images1/credit.png'
import im4 from '../images1/phone.png'
import im5 from '../images1/girl.png'
import im6 from '../images1/lappy.png'
import im7 from '../images1/phone1.png'
import Cards1 from '../images1/cards1.png'
export default function Scroll() {
  return (
    <>
    <div className='row change'>
    <div id="carouselExampleControls" class="carousel slide productsrow mt-3" data-bs-ride="carousel">
     <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={im1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item ">
      <img src={im2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={im3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={im4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={im5} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={im6} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={im7} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    <hr/>
    <div class="row-md-1">
        <div class="col-md-12 cards">
            <img src={Cards1} />
        </div>
    </div>
    </>
  )
}
