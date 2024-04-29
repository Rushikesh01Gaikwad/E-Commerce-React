import React from "react";

function Address() {
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
                                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Name</label>
                                        </div>
                                        <div class="form-floating mx-3" style={{ width: "50%" }}>
                                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Pin Code</label>
                                        </div>
                                    </div>
                                    <div class="form-floating mt-3">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px", width: "98%" }}></textarea>
                                        <label for="floatingTextarea2">Address</label>
                                    </div>
                                    <div className="address-body mt-3" >
                                        <div class="form-floating" style={{ width: "50%" }}>
                                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">City/District/Town</label>
                                        </div>
                                        <div class="form-floating mx-3" style={{ width: "50%" }}>
                                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
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
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
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
                                    {/* <div class="form-check">
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
                                    <br />*/}
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="option5" />
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
                            <h6 class="card-subtitle mb-2 text-body-secondary">Delivery Charges <del>₹ 70</del> Free</h6>
                            <br />
                            <p class="card-text"><strong><h5>Total Payable 500</h5></strong></p>
                            <p className="card-footer">Your Total saving on this order ₹ 199 </p>
                        </div>
                    </div>
                    <div className="btn-proceed">
                        <button type="button" class="btn btn-success"><b>Proceed</b></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Address;