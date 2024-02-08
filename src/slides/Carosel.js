import React from 'react'
import logo from'../Images/logo/150years.png'
import logo1 from '../Images/logo/flag.png'
import logo2 from '../Images/logo/choose.png'
import { Carousel } from 'bootstrap'
import aircomp from '../Images/air compresser/air compressor 3.png'
import aircomp1 from '../Images/air compresser/air compressor 4.png'



export default function Carosel() {
  return (

      <div className="main">
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
                <h4>Under 700 | Combo Pack | Multiple Brand & Much More...</h4>
                <div>
                    <img src={aircomp} alt="compressor" style={{width:'400px', height:'400px'}}></img>
                    <img src={aircomp1} alt="compressor" style={{width:'400px', height:'400px'}}></img>
                    <button type="button" className="btn btn-outline-info" style={{color:'#009698', bottom: '0', right: '0' }}>See All Offers</button>
                </div>
            </section>
        </div>
    </div>

    

  )
}
