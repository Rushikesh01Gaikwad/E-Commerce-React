import React from 'react'

export default function CatagoryListDiv() {
  return (
      <div><button type="button" className="btn btn-outline-dark btnflotdiv" data-bs-toggle="button"><h6>🔎Brand Filters</h6></button>
    <div className=" algincat">
        <h4><b>Category List</b></h4>
        <br/>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100">
                <img src="https://atlascopco.scene7.com/is/image/atlascopco/service+engineer?$landscape400$" className="card-img-top" alt="..."/>
                <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                    <h5 className="card-title">Air compresser, blowers and industrial gas solutions</h5>
                </div>
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
                <img src="https://www.airenergy.com.au/wp-content/uploads/2015/08/atlas-copco-compressors-screw.jpg" className="card-img-top" alt="..."/>
                <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                    <h5 className="card-title">Vaccume Solutions</h5>
                </div>
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
                <img src="https://www.nepic.co.uk/wp-content/uploads/memberblogsposts/images/Press%20release1%20h2-45.jpg%20(small).jpg" className="card-img-top" alt="..."/>
                <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                    <h5 className="card-title">Rental 24/7 reliable solutions</h5>
                </div>
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
