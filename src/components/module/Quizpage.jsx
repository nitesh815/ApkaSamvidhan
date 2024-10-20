import React from "react"
import Back from "../common/back/Back"
import TeamCard from "../team/TeamCard"
import Awrapper from "../about/Awrapper"
import Sidebar from "./Sidebar"
import Quiz from "./quiz"
import "./quiz.css"

const Quizpage = () => {
  return (
    <>
      <Back title='M1' />
      
        <div class="flex">
      <Sidebar/>
        <div className='container'>
        <>
        <div className="container1">
        <Quiz/>
        </div>
        </>
        </div>
        </div>
    </>
  )
}

export default Quizpage