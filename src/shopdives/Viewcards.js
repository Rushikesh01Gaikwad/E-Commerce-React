import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Viewcards extends Component {
  render() {

    let {title, description, image, rating, price} =this.props;


    return (
        <div className="container display">
            <div className="divtopmarg">
                <div className="my-3">
                        <div className="card" style={{width:"18rem"}}>
                        <img src={image} className="card-img-top" alt="..."/>
                        <Link  type="button" className="btn" style={{backgroundColor:"#009698", borderRadius:'0px'}} to='/Mainproduct'>
                            <div className="card-body" style={{backgroundColor:"#009698", color:"white"}}>
                                <span className="card-title"><h5>{title}</h5></span>
                            </div></Link>
                            <div className="card-footer">
                            <small className="text-body-secondary">{description}...</small>
                            </div>
                            <div className="card-footer">
                            <small className="text-body-secondary"><b>Rating: {rating} </b></small>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary"><del>$35.90</del> <b>{"$"}{price}</b></small>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
  }
}

export default Viewcards






