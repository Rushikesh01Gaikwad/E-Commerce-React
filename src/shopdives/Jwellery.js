import React from 'react'

export default function Findmore() {
  return (
    <div className="container divtopmarg">
        <h4> Jwellery</h4>
        <br/>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card h-100">
                    <img src="https://time.com/shopping/static/0c32680c03cc78809aed224662f22823/57e17/best-mens-jewelry-brands.jpg" className="card-img-top" alt="..."/>
                    <button type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}}>
                        <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                            <span className="card-title"><h5>Men's Jwellery</h5></span>
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
                    <img src="https://www.caratlane.com/blog/wp-content/uploads/2022/12/Diwali-product-shoot-sys-20028-2.jpg" className="card-img-top" alt="..."/>
                    <button type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}}>
                        <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                            <span className="card-title"><h5>Women's Jwellery</h5></span>
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
  )
}
