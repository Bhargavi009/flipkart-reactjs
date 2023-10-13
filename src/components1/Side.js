import React from 'react'
import Logo1 from '../images1/logo1.png';
export default function Side() {
  return (
      <>
    <div className="row side">
        <div className="col-md-2">
            <ul>
                <li><img src={Logo1}/></li>
            </ul>
        </div>
        <div class="col-md-6 search">

        <button><i class="fa-solid fa-magnifying-glass"></i></button>
        <input class="text" placeholder="search"></input>
                                             
            
        </div>
        <div class="col-md-4 store">
            
            <i class="fa-solid fa-store "></i>Become a Seller
            <i class="fa-solid fa-user"></i>sign In
            <i class="fa-solid fa-cart-shopping"></i>cart
            <i class="fa-solid fa-ellipsis-vertical"></i>
            
        </div>
    </div>
    <hr />
    </>
  )
}
