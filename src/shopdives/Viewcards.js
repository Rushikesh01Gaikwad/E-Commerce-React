import React from 'react'
import { Link } from 'react-router-dom';


function Viewcards(props) {

    let Handleonclick = () => 
    {
        console.log(props.id)
    }

    

    return (
        <div>
            <div className="container display">
            <div className="divtopmarg">
                <div className="my-2">
                        <div className="card" style={{width:"18rem"}}>
                        <img src={props.image} className="card-img-top sizeimagecard" alt="..."/>
                        <Link type="button" className="btn" style={{backgroundColor:"#009698",borderRadius:'0px'}} 
                        onClick={Handleonclick} to='/Mainproduct'>
                            <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                                <span className="card-title"><h5>{props.title}...</h5></span>
                            </div></Link>
                            <div className="card-footer">
                            <small className="text-body-secondary">{props.description}...</small>
                            </div>
                            <div className="card-footer">
                            <small className="text-body-secondary"><b>Rating: {props.rating} </b></small>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary"><b>{"₹ "}{props.price}</b></small>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
  }

export default Viewcards









