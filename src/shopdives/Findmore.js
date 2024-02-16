import React from 'react'

export default function Findmore() {
  return (
    <div className="container divtopmarg">
        <br/>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card h-100">
                    <img src="https://atlascopco.scene7.com/is/image/atlascopco/service+engineer?$landscape400$" className="card-img-top" alt="..."/>
                    <button type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}}>
                        <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                            <span className="card-title"><h5>Vaccume Solutions</h5></span>
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
                    <img src="https://www.airenergy.com.au/wp-content/uploads/2015/08/atlas-copco-compressors-screw.jpg" className="card-img-top" alt="..."/>
                    <button type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}}>
                        <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                            <span className="card-title"><h5>Vaccume Solutions</h5></span>
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
