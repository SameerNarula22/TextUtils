import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
	const navbarStyle = {
		backgroundColor: props.darkMode ? '#21272e' : 'white',
		color: props.darkMode ? 'white' : 'black',
	};

	return (
		<nav className='navbar navbar-expand-lg' style={navbarStyle}>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					{props.title}
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item {props.toggleDarkMode} '>
							<Link className='nav-link active' aria-current='page' to='/'>
								Home
							</Link>
						</li>

						<li className='nav-item'>
							<Link className='nav-link' to='/about'>
								About
							</Link>
						</li>
					</ul>

					<div className='form-check form-switch ms-3'>
						<input
							className='form-check-input'
							type='checkbox'
							role='switch'
							id='darkModeSwitch'
							checked={props.darkMode}
							onChange={props.toggleDarkMode}
						/>
						<label className='form-check-label' htmlFor='darkModeSwitch'>
							{props.darkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
						</label>
					</div>
				</div>
			</div>
		</nav>
	);
}
