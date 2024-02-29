import React from 'react'

export default function LangPopup() {
  return (
    <div>
      <div className="modal fade" id="staticBackdroplang" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel"><h5>Select Your Language</h5></h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <h6>English</h6>
                  </label>
                </div>
                {/* <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                  <label className="form-check-label" for="flexRadioDefault2">

                  </label>
                </div> */}
                </div>
                <div className="modal-footer justify-content-around">
                    <button type="button" className="btn hover"><h6>Submit</h6></button>
                    <button type="button" className="btn hover" data-bs-dismiss="modal"><h6>Close</h6></button>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}
