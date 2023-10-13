import React from 'react'
import '../App'
import Topoffer from '../images1/topoffer.png';
import Tv from '../images1/tv.png';
import Mobile from '../images1/mobile.png';
import Home from '../images1/home.png';
import Grocery from '../images1/grocery.png';
import Furniture from '../images1/furniture.png';
import Flights from '../images1/flights.png';
import Fashion from '../images1/fashion.png';
import Electronics from '../images1/electronics.png';
import Beauty from '../images1/beauty.png';
export default function banner() {
  return (
   <>
    <div class="row">
        <div class="col-md-12 banner">
         <img src={Topoffer} />
          <img src={Tv} />
          <img src={Mobile} />
          <img src={Home} />
          <img src={Grocery} />
          <img src={Furniture} />
          <img src={Flights} />
          <img src={Fashion} />
          <img src={Electronics} />
          <img src={Beauty} />
        </div>
    </div>
    <div class="row">

          <div class="col-md-12">
              <ul class="banner">
                
                     <li> <a>Top Offers</a></li>
                      <li><a>Tv,Lappy</a></li>
                      <li><a>Mobiles</a></li>
                      <li><a>Home</a></li>
                      <li><a>Grocery</a></li>
                      <li><a>Furniture</a></li>
                      <li><a>Flights</a></li>
                      <li><a>Fashion</a></li>
                      <li><a>Electronics</a></li>
                      <li><a>Beauty</a></li>
                  
              </ul>
            </div>
    </div>
    <hr/>

   </>
  )
}
