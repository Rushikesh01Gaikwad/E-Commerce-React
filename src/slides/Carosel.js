import React from 'react'
import logo from'../Images/logo/150years.png'
import cr1 from '../Images/crousel Images/the-indian-fashion-crousel1.png'
import cr2 from '../Images/crousel Images/perfume-crousel2.png'
// import cr3 from '../Images/crousel Images/crousel3.png'
import cr4 from '../Images/crousel Images/cruosel4.png'
import { Carousel } from 'bootstrap'
import singM from '../Images/crousel Images/menpos.png'
import singW from '../Images/crousel Images/womenpose.png'



export default function Carosel() {
  return (

      <div className="main aligndiv">
        <div id="carouselExampleAutoplaying" className="carousel slide  custom-carousel" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active custom-carousel img">
                <img src={cr1} className="d-block" alt="..."/>
                </div>
                <div className="carousel-item active custom-carousel img">
                <img src={cr2} className="d-block" alt="..."/>
                </div>
                <div className="carousel-item active custom-carousel img">
                <img src={cr4} className="d-block" alt="..."/>
                </div>
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div className="sec-2">
            <section>
                <h3>Under 700 | Combo Pack | Multiple Brand & Much More...</h3>
                <div>
                    <img src={singM} alt="compressor" style={{width:'380px', height:'360px'}}></img>
                    <img src={singW} alt="compressor" style={{width:'380px', height:'360px', margin:'7px'}}></img>
                    <button type="button" className="btn btn-outline-dark mx-3" data-bs-toggle="button"><h6>See All Offers</h6></button>
                </div>
            </section>
        </div>
    </div>

    

  )
}
