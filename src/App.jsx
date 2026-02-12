import { useState } from 'react'
import "./styles/generalStyle.scss"
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import StoreProvider from './store/ContextStore'



function App() {

  return (
    <StoreProvider>
      <Header/>
      <Main/>
      <Footer/>
    </StoreProvider>
  )
}

export default App
