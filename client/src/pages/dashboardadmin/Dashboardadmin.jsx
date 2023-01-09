import React from 'react'
import '../../css/dashboard.css'
export  default function Dashboard () {
  return (
    <div className="dashboardContainer">
      
      <div className="topItems">
      <div className='topCard' id='documentsStadistics'>
      <div className="dashicon"/>
      <h4 className="dashTitle">Title</h4>
        <span className="dashItemText"> <p>Value </p> </span>  
      </div>
      <div className='topCard' id='documentsStadistics'>
      <div className="dashicon"/>
      <h4 className="dashTitle">Title</h4>

      </div>
      <div className='topCard' id='documentsStadistics'>
      <div className="dashicon"/>
      <h4 className="dashTitle">Title</h4>

      </div>
      </div>

      <div className="middleItems">
      <div className='middleCard' id='documentsStadistics'>
      <div className="dashicon"/>
      <h4 className="dashTitle">Title</h4>

      </div>
      <div className='middleCard' id='documentsStadistics'>
      <div className="dashicon"/>
      <h4 className="dashTitle">Title</h4>

      </div>
      </div>

      <div className="bottomItems">
      <div className='bottomCard' id='documentsStadistics'>

      <div className="dashicon"/>
      <h4 className="dashTitle">Title</h4>
      </div>
      </div>

    </div>
  )
}
