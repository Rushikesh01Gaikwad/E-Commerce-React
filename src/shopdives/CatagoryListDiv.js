import React from 'react'
import { Link } from 'react-router-dom'
import Carosel from '../slides/Carosel';

export default function CatagoryListDiv() {
  return (
      <div>
          <Carosel/>
        <div className="container display">
          <div className="divtopmarg">
          <h4><b>Category List</b></h4>
          <br/>
          <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                  <div className="card h-100">
                  <img src="https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg" className="card-img-top" alt="..."/>
                  <Link type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}} to='/products'>
                      <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                          <span className="card-title"><h5>Men's</h5></span>
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
                  <img src="https://www.sarkariexam.com/wp-content/uploads/2023/12/ezgif.com-optiwebp-9.webp" className="card-img-top" alt="..."/>
                  <Link type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}} to='/products'>
                      <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                          <span className="card-title"><h5>Women's</h5></span>
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
                  <img src="https://images.unsplash.com/photo-1581841899040-8b5e38bae033?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwY2hpbGR8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..."/>
                  <Link type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}} to='/products'>
                      <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                          <span className="card-title"><h5>Childrens</h5></span>
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
    </div>
    </div>

  )
}
