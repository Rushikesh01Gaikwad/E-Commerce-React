import React from 'react'
import Locsidebar from '../sidebarcontents/Locationsidebar'


export default function Sidebar() {

  return (
    
    //This is the Offcanvas using here a bootstrap
    <div>
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">heading</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          
        </div>
      </div>
    </div>
  ) 
}
