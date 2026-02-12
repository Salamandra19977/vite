import React from 'react'
import PropTypes from 'prop-types'
import style from "./Main.module.scss"
import AddForm from "../AddForm/AddForm"
import {FaRegPlusSquare} from "react-icons/fa"
import MCalendar from '../MCalendar/MCalendar'

function Main(props) {
  const [modalOpen, setModalOpen] = React.useState(false)
  return (
    <div className={style.wrapper}>
        <MCalendar/>
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

