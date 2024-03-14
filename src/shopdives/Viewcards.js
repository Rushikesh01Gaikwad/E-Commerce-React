import React from 'react'
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addItem} from '../slices/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Viewcards(props) {

    const dispatch = useDispatch();

    let Handleonclick = () => 
    {
        console.log(props.id)
    }

    const notify=()=>
  {
    toast.success('Item added successfully', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
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
                            <small className="text-body-secondary"><b>Rating: {props.rating}</b></small>
                            <small style={{float:'right'}}><b>{" Rupees ₹ "}{props.price}</b></small>
                            </div>
                            <span onClick={notify}>
                                <button className="card-footer container btn" onClick={e=>dispatch(addItem({name:props.title, price:props.price}))}>
                                    <b>Add to cart</b>
                                </button>  
                            </span>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer/>
        </div>
        
    )
  }

export default Viewcards









