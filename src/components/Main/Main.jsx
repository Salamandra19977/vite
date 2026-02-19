import React from 'react'
import PropTypes from 'prop-types'
import style from "./Main.module.scss"
import AddForm from "../AddForm/AddForm"
import {FaRegPlusSquare} from "react-icons/fa"
import MCalendar from '../MCalendar/MCalendar'
import {Routes, Route} from "react-router"

function Main(props) {
  const [modalOpen, setModalOpen] = React.useState(false)
  return (
    <div className={style.wrapper}>
        <Routes>
          <Route path='/' element={<MCalendar/>}/>
          <Route path='/week' element={<div>week</div>}/>
          <Route path='/day' element={<div>day</div>}/>
        </Routes>
        {modalOpen && <AddForm open={setModalOpen}/>}
        <button 
          className={style.addButton}
          onClick={() => setModalOpen(true)}
        >
          <FaRegPlusSquare/>
        </button>
    </div>
  )
}

Main.propTypes = {}

export default Main

