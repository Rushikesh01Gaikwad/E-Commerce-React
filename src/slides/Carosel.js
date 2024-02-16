import React from 'react'
import { Carousel } from 'bootstrap'
import cr1 from '../Images/crousel Images/the-indian-fashion-crousel1.png'
// import cr2 from '../Images/crousel Images/perfume-crousel2.png'
// import cr3 from '../Images/crousel Images/cruosel4.png'
import singM from '../Images/crousel Images/menpos.png'
import singW from '../Images/crousel Images/womenpose.png'



export default function Carosel() {
  return (

      <div className="headerdiv">
        <div id="carouselExampleAutoplaying" className="carousel slide headerleftdiv" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={cr1} className="d-block crouselimgadjust" alt="img1"/>
                </div>
                {/* <div className="carousel-item active">
                <img src={cr2} className="d-block crouselimgadjust" alt="img2"/>
                </div>
                <div className="carousel-item active">
                <img src={cr3} className="d-block crouselimgadjust" alt="img3"/>
                </div> */}
                
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
        <div className="headerrightdiv">
            <section style={{marginLeft:"1vw"}}>
                <h3>Under 700 | Combo Pack | Multiple Brand & Much More...</h3>
                <div>
                    <img src={singM} alt="offerimg" className="headerrightdivimg"></img>
                    <img src={singW} alt="offerimg" className="headerrightdivimg"></img><br/>
                    <button type="button" className="btn btn-outline-dark mx-3 my-3" data-bs-toggle="button"><h6>See All Offers</h6></button>
                </div>
            </section>
        </div>
    </div>

    

  )
}
