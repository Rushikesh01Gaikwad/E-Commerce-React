import React from 'react'

export default function TodayDealssidebar() {
  return (
    <div>
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptionsthree" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Today's Deals</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <h3>This is the Today's Deals Side bar containt</h3>
        </div>
      </div>
    </div>
  )
}
