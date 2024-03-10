import React, {useState, useEffect} from 'react'
import articlejson from '../articles.json'

export default function Jwellerycatagory() {
  
  const[data, setData]=useState(articlejson);
  useEffect(() => {
    // Filter the data by 'electronics' category when component mounts
    const result = articlejson.filter(item => item.category === 'jewelery');
    setData(result);
  }, []);

  return (
    <div>
      <h3>This is Jwellery section</h3>
      <div className='container display'>
      <div className='col-md-9'>
        <div className='row'>
          {data.map((values)=>{
            return(
              <>
              <div className='col-md-4 mb-4' key={values.id}>
              <div class="card">
              <img src={values.image} class="card-img-top" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">{values.title}</h5>
              <p class="card-text">{values.description}</p>
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
