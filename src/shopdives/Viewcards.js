import React from 'react'
import img from '../Images/crousel Images/dupliimg.png'
import { Link } from 'react-router-dom'

export default function Viewcard() {
  return (
    <div className="container">
        <br/>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <Link type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}} to='/product'>
                    <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                        <span className="card-title"><h5>Kurta's</h5></span>
                    </div>
                </Link>
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
                <Link type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}} to='/product'>
                    <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                        <span className="card-title"><h5>Shirts</h5></span>
                    </div>
                </Link>
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
                <Link type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}} to='/product'>
                    <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                        <span className="card-title"><h5>Geans</h5></span>
                    </div>
                </Link>
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
                <Link type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}} to='/product'>
                    <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                        <span className="card-title"><h5>Shorts</h5></span>
                    </div>
                </Link>
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
                <Link type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}} to='/product'>
                    <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                        <span className="card-title"><h5>Goggles</h5></span>
                    </div>
                </Link>
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
                <Link type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}} to='/product'>
                    <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                        <span className="card-title"><h5>watches</h5></span>
                    </div>
                </Link>
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
  )
}
