import React from 'react'
import img from '../Images/crousel Images/dupliimg.png'

export default function Divtechmode() {
  return (
    <div className="container">
        <div className="divtopmarg">
        <h4><b>Fashions </b></h4>
        <br/>
        <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
                <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <button type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}}>
                    <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                        <span className="card-title"><h5>Hat</h5></span>
                    </div>
                </button>
                <div className="card-footer">
                    <small className="text-body-secondary"><b>Rating:</b> ⭐⭐⭐⭐✰ (679)</small>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary"><del>$35.90</del> <b>$40.89</b></small>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <button type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}}>
                    <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                        <span className="card-title"><h5>Flip Flop</h5></span>
                    </div>
                </button>
                <div className="card-footer">
                    <small className="text-body-secondary"><b>Rating:</b> ⭐⭐⭐⭐✰ (679)</small>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary"><del>$35.90</del> <b>$40.89</b></small>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <button type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}}>
                    <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                        <span className="card-title"><h5>Shoes</h5></span>
                    </div>
                </button>
                <div className="card-footer">
                    <small className="text-body-secondary"><b>Rating:</b> ⭐⭐⭐⭐✰ (679)</small>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary"><del>$35.90</del> <b>$40.89</b></small>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <button type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}}>
                    <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                        <span className="card-title"><h5>Goggles</h5></span>
                    </div>
                </button>
                <div className="card-footer">
                    <small className="text-body-secondary"><b>Rating:</b> ⭐⭐⭐⭐✰ (679)</small>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary"><del>$35.90</del> <b>$40.89</b></small>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <button type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}}>
                    <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                        <span className="card-title"><h5>Makup kit</h5></span>
                    </div>
                </button>
                <div className="card-footer">
                    <small className="text-body-secondary"><b>Rating:</b> ⭐⭐⭐⭐✰ (679)</small>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary"><del>$35.90</del> <b>$40.89</b></small>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <button type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}}>
                    <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                        <span className="card-title"><h5>Keychains</h5></span>
                    </div>
                </button>
                <div className="card-footer">
                    <small className="text-body-secondary"><b>Rating:</b> ⭐⭐⭐⭐✰ (679)</small>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary"><del>$35.90</del> <b>$40.89</b></small>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <button type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}}>
                    <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                        <span className="card-title"><h5>Showpiece</h5></span>
                    </div>
                </button>
                <div className="card-footer">
                    <small className="text-body-secondary"><b>Rating:</b> ⭐⭐⭐⭐✰ (679)</small>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary"><del>$35.90</del> <b>$40.89</b></small>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <button type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}}>
                    <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                        <span className="card-title"><h5>Swetors</h5></span>
                    </div>
                </button>
                <div className="card-footer">
                    <small className="text-body-secondary"><b>Rating:</b> ⭐⭐⭐⭐✰ (679)</small>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary"><del>$35.90</del> <b>$40.89</b></small>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
