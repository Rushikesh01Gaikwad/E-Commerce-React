import React from 'react'
import logo from'../Images/logo/150years.png'
import logo1 from '../Images/logo/flag.png'
import logo2 from '../Images/logo/environ atlas.png'
import { Carousel } from 'bootstrap'
import aircomp from '../Images/air compresser/air compressor 6.png'
import aircomp1 from '../Images/air compresser/air compressor 7.png'



export default function Carosel() {
  return (

      <div className="main aligndiv">
        <div id="carouselExampleAutoplaying" className="carousel slide  custom-carousel" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active custom-carousel img">
                <img src={logo} className="d-block" alt="..."/>
                </div>
                <div className="carousel-item active custom-carousel img">
                <img src={logo1} className="d-block" alt="..."/>
                </div>
                <div className="carousel-item active custom-carousel img">
                <img src={logo2} className="d-block" alt="..."/>
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
                    <img src={aircomp} alt="compressor" style={{width:'380px', height:'360px'}}></img>
                    <img src={aircomp1} alt="compressor" style={{width:'380px', height:'360px', margin:'7px'}}></img>
                    <button type="button" className="btn btn-outline-dark mx-3" data-bs-toggle="button"><h6>See All Offers</h6></button>
                </div>
            </section>
        </div>
    </div>

    

  )
}
