import { useState } from 'react'
import "./styles/generalStyle.scss"
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import StoreProvider from './store/ContextStore'
import {BrowserRouter} from 'react-router'



function App() {

  return (
    <BrowserRouter>
      <StoreProvider>
        <Header />
        <Main />
        <Footer />
      </StoreProvider>
    </BrowserRouter>

  )
}

export default App
