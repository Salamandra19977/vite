import { useState } from 'react'
import "./styles/generalStyle.scss"
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {BrowserRouter} from 'react-router'

import { useDispatch } from 'react-redux'
import { uploadTokenFromLocalStorege } from './components/Auth/AuthReducer'



function App() {
  const dispatch = useDispatch()
  dispatch(uploadTokenFromLocalStorege())

  return (
    <BrowserRouter>
        <Header />
        <Main />
        <Footer />
    </BrowserRouter>

  )
}

export default App
