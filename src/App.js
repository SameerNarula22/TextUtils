import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alerts from './Components/Alerts';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const [darkMode, setDarkMode] = useState(false); // Handle dark mode state
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({ msg: message, type: type });
		setTimeout(() => {
			setAlert(null);
		}, 1000);
	};

	const toggleDarkMode = () => {
		if (darkMode) {
			document.body.style.backgroundColor = 'white';
			document.body.style.color = 'black';
			showAlert('Light mode has been enabled', 'success');
		} else {
			document.body.style.backgroundColor = 'rgb(47, 50, 54)';
			document.body.style.color = 'white';
			showAlert('Dark mode has been enabled', 'success');
		}
		setDarkMode(!darkMode);
	};

	return (
		<>
			<Router>
				<Navbar
					title='TextUtils'
					darkMode={darkMode} // Pass darkMode to Navbar
					toggleDarkMode={toggleDarkMode}
				/>
				<Alerts alert={alert} />
				<div className='container my-3'>
					<Routes>
						<Route path='/about' element={<About darkMode={darkMode} />} />
						<Route
							path='/'
							element={
								<TextForm
									heading='Enter the Text :'
									darkMode={darkMode} // Pass darkMode to TextForm
									showAlert={showAlert}
								/>
							}
						/>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
