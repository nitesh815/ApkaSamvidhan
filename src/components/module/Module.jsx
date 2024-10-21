import React from "react"
import Back from "../common/back/Back"
// import TeamCard from "../team/TeamCard"
// import Awrapper from "../about/Awrapper"
import Sidebar from "./Sidebar"
import Mabout from "./MAbout"
import "./quiz.css"

const Module = () => {
  return (
    <>
      <Back title='M1' />

      <div class="flex">
        <Sidebar />
        <div className='container'>

          <>
          <Mabout/>  
          </>
        </div>
      </div>
    </>
  )
}

export default Module
