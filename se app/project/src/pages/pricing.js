import React from 'react'
import './pricing.css'
import img3 from '../img/img3.png'
import img2 from '../img/img2.png'
import img1 from '../img/img1.png'

const pricing = () => {
  return (
      <>
    <h2>Pricing details</h2>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-4">
                <img class="img" src={img1} alt=""/>
                <button  type="button"  class="btn btn-outline-primary btn-lg"><a class="list" href=""><h3>Free trial</h3></a></button>
            </div>
            <div class="col-lg-4">
                <img class="img" src={img2} alt=""/>
                <button  type="button" class="btn btn-outline-primary btn-lg"><a class="list" href=""><h3>Pro</h3></a></button>
            </div>
            <div class="col-lg-4">
                <img class="img"  src={img3} alt=""/>
                <button  type="button"  class="btn btn-outline-primary btn-lg"><a class="list"href=""><h3>Premium</h3></a></button>
            </div>
        </div>
    </div>
    </>
  )
}

export default pricing