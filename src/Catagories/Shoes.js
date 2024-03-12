import React, { useState, useEffect } from 'react'
import articlejson from '../articles.json'
import { Link } from 'react-router-dom';

export default function Shoes() {
    const[data, setData]=useState(articlejson);
    useEffect(() => {
      // Filter the data by 'electronics' category when component mounts
      const result = articlejson.filter(item => item.category === 'shoes');
      setData(result);
    }, []);
  return (
    <div>
      <div className='container display'>
      <div style={{marginTop:"2vw"}}>
      <h4><b>Shoes </b></h4>
        <div className='row' style={{marginTop:"2vw"}}>
          {data.map((values)=>{
            return(
              <>
              <div className='col-md-4 mb-4' key={values.id}>
                <div className='my-2'>
                  <div className="card" style={{width:"18rem"}}>
                  <img src={values.image} className="card-img-top sizeimagecard" alt="..."/>
                  <Link type="button" className="btn" style={{backgroundColor:"#009698",borderRadius:'0px'}} to='/Mainproduct'>
                      <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                        <span className="card-title"><h5>{values.title.slice(0,40)}...</h5></span>
                      </div></Link>
                      <div className="card-footer">
                        <small className="text-body-secondary">{values.description.slice(0, 40)}...</small>
                      </div>
                      <div className="card-footer">
                        <small className="text-body-secondary"><b>Rating: {values.rating.rate} </b></small>
                      </div>
                      <div className="card-footer">
                        <small className="text-body-secondary"><b>{"₹ "}{values.price}</b></small>
                      </div>      
                  </div>
                </div>
              </div>
              </>
            )
          })} 
        </div>
      </div>
    </div>
    </div>
  )
}
