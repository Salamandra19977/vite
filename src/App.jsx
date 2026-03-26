import { useState, useEffect } from 'react'
import "./styles/generalStyle.scss"
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router'

import { useDispatch, useSelector } from 'react-redux'
import { uploadTokenFromLocalStorege } from './components/Auth/AuthReducer'
import { getEvents } from './components/CalendarReducer'


function App() {
	const dispatch = useDispatch()
	dispatch(uploadTokenFromLocalStorege())

	let token = useSelector((state) => state.auth.token)

	useEffect(() => {
		if(token) dispatch(getEvents())
	}, [token])

	return (
		<BrowserRouter>
			<Header />
			<Main />
			<Footer />
		</BrowserRouter>

	)
}

export default App
