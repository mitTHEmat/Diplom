import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

import Login from './Login';
import Main from './Main';

function App() {

	let token = document.cookie.replace (/(?:(?:^|.*;\s*)CUSTOMERSESSIONID\s*\=\s*([^;]*).*$)|^.*$/, "$1");

	const [isAuthorized, setIsAuthorized] = useState(false);

	useEffect (()=> {
		if (token != "")
		{
			setIsAuthorized (true)
		}
	}, [isAuthorized]);



	return <HashRouter>
		<Routes>
			<Route path='/*' element={<Main/>}/>
			<Route
					path="/login"
					element={isAuthorized ? <Navigate to="/extranet" replace={true} /> : <Login />}
			/>
		</Routes>
	</HashRouter>
}

export default App;
