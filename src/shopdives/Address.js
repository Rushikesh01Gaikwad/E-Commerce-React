import React from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Address() {

    const usenavigate = useNavigate();

    const orderDetails = useSelector(state => state.myOrder);

    let name = sessionStorage.getItem('name')
    let email = sessionStorage.getItem('email')
    let mobile = sessionStorage.getItem('mobile')
    let address = sessionStorage.getItem('address')
    let city = sessionStorage.getItem('city')
    let state = sessionStorage.getItem('state')
    let pincode = sessionStorage.getItem('pin')


    const location = useLocation(); // this is for when you pass variable with value using Link to fetch data.
    const queryParams = new URLSearchParams(location.search);
    const total = queryParams.get('total');

    const handleSubmit = () => {
        // Fetch the existing user data from the API
        axios.get(`http://localhost:3000/Data?email=${email}`)
            .then(response => {
                var userData = response.data;
                console.log(userData, orderDetails, userData[0]["order"], userData[0]["id"])

                console.log(orderDetails)

                orderDetails.forEach((item) => {
                    userData[0]["order"]?.push(item);
                });
                // Update the order key with orderDetails

                // Make a POST request to update the user data on the server
                axios.put(`http://localhost:3000/Data/${userData[0]["id"]}`, userData[0])
                    .then(response => {
                        console.log('Order details added successfully:', response.data);
                    })
                    .catch(error => {
                        console.error('Error adding order details:', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });

        usenavigate('/final')
    }

    return (
        <div>
            <div className="container flex">
                <div className="containerFirst-address">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <b>Add Address</b>
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div className="address-body" >
                                        <div class="form-floating" style={{ width: "50%" }}>
                                            <input type="email" class="form-control" id="floatingInput" value={name} placeholder="name@example.com" />
                                            <label for="floatingInput">Name</label>
                                        </div>
                                        <div class="form-floating mx-3" style={{ width: "50%" }}>
                                            <input type="text" class="form-control" id="floatingPassword" value={pincode} />
                                            <label for="floatingPassword">Pin Code</label>
                                        </div>
                                    </div>
                                    <div class="form-floating mt-3">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" value={address} style={{ height: "100px", width: "98%" }}></textarea>
                                        <label for="floatingTextarea2">Address</label>
                                    </div>
                                    <div className="address-body mt-3" >
                                        <div class="form-floating" style={{ width: "50%" }}>
                                            <input type="email" class="form-control" id="floatingInput" value={city} placeholder="name@example.com" />
                                            <label for="floatingInput">City/District/Town</label>
                                        </div>
                                        <div class="form-floating mx-3" style={{ width: "50%" }}>
                                            <input type="text" class="form-control" id="floatingPassword" value={state} />
                                            <label for="floatingPassword">State</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <b>Mobile Number</b>
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="form-floating mb-2">
                                        <input type="email" class="form-control" id="floatingInput" value={mobile} placeholder="name@example.com" />
                                        {/* <label for="floatingInput">Mobile Number</label> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <b>Payment Method</b>
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                        <label class="form-check-label" for="exampleRadios1">
                                            UPI
                                        </label>
                                    </div>
                                    <br />
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label class="form-check-label" for="exampleRadios2">
                                            Credit/Debit/ ATM card
                                        </label>
                                    </div>
                                    <br />
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                                        <label class="form-check-label" for="exampleRadios3">
                                            Net Banking
                                        </label>
                                    </div>
                                    <br />
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4" />
                                        <label class="form-check-label" for="exampleRadios4">
                                            EMI
                                        </label>
                                    </div>
                                    <br />
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="option5"/>
                                        <label class="form-check-label" for="exampleRadios5">
                                            Cash On Delivery
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="containerSecond-address">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Total Details</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Delivery Charges <del>₹ 70</del><span style={{ color: 'green' }}> Free</span></h6>
                            <br />
                            <p class="card-text"><strong><h5>Total Payable {total} </h5></strong></p>
                            <p className="card-footer d-flex flex-row-reverse">
                                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal"><b>Proceed</b></button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Confirmation</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p> {name}</p>
                            <p>{mobile}</p>
                            <p>{address}</p>
                            <p>{city}</p>
                            <p>{state}</p>
                            <p>{pincode}</p>
                            <p>Your Total bill is {total}</p>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={handleSubmit}><b>Confirm</b></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Address;