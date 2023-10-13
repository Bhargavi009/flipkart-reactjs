import React from 'react'
import '../App'
import axios from 'axios'
import { useEffect,useState } from 'react'
export default function Products1() {
    const [products,setProducts]=useState([{}])
    useEffect(()=> {
        axios.get('https://dummyjson.com/products')
        .then(res => setProducts(res.data.products))
    },0)
    console.log(products)
    return (
        <>
        <div className="row">
            <h1>Best Mobiles</h1>
            {
                    products.map((element, index) => {
                        return (
                            <>
                                {
                                    <div class="card col-md-2" style={{margin:"5px"}}>
                                    <img class="card-img-top" src={element.thumbnail} alt="Card image cap" height="150px" width="300px "/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Cras justo odio</li>
                                        <li class="list-group-item">Dapibus ac facilisis in</li>
                                        <li class="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                    <div class="card-body">
                                        <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a>
                                    </div>
                                </div> 
                                }
                            </>
                        )
                    })

                }
            </div>
        </>
    )
}
