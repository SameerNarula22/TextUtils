import React from 'react';

export default function About(props) {
	let myStyle = {
		color: props.darkMode ? 'white' : 'black', // Check if darkMode is true
		backgroundColor: props.darkMode ? '#343a40' : 'white', // Dark mode background
		border: props.darkMode ? '1px solid white' : '1px solid black', // Border color for dark mode
	};

	return (
		<div className='container my-3'>
			<h1 className='my-3'>About TextUtils</h1>
			<div className='accordion' id='accordionExample'>
				<div className='accordion-item my-2' style={myStyle}>
					<h2 className='accordion-header'>
						<button
							className='accordion-button'
							type='button'
							style={myStyle}
							data-bs-toggle='collapse'
							data-bs-target='#collapseOne'
							aria-expanded='true'
							aria-controls='collapseOne'>
							<strong>Text Processing Features</strong>
						</button>
					</h2>
					<div
						id='collapseOne'
						className='accordion-collapse collapse show'
						data-bs-parent='#accordionExample'>
						<div className='accordion-body' style={myStyle}>
							<strong>TextUtils</strong> provides a variety of tools for text
							manipulation, such as converting text to uppercase, lowercase, or
							removing extra spaces and lot many features . It’s designed to
							enhance your productivity while handling text.
						</div>
					</div>
				</div>

				<div className='accordion-item my-2' style={myStyle}>
					<h2 className='accordion-header'>
						<button
							className='accordion-button collapsed'
							type='button'
							style={myStyle}
							data-bs-toggle='collapse'
							data-bs-target='#collapseTwo'
							aria-expanded='false'
							aria-controls='collapseTwo'>
							<strong>Customization with Dark Mode</strong>
						</button>
					</h2>
					<div
						id='collapseTwo'
						className='accordion-collapse collapse'
						data-bs-parent='#accordionExample'>
						<div className='accordion-body' style={myStyle}>
							TextUtils supports a seamless switch between Light and Dark modes,
							offering a comfortable reading and editing experience for users in
							all environments.
						</div>
					</div>
				</div>

				<div className='accordion-item my-2' style={myStyle}>
					<h2 className='accordion-header'>
						<button
							className='accordion-button collapsed'
							type='button'
							style={myStyle}
							data-bs-toggle='collapse'
							data-bs-target='#collapseThree'
							aria-expanded='false'
							aria-controls='collapseThree'>
							<strong>Why TextUtils?</strong>
						</button>
					</h2>
					<div
						id='collapseThree'
						className='accordion-collapse collapse'
						data-bs-parent='#accordionExample'>
						<div className='accordion-body' style={myStyle}>
							TextUtils is perfect for users who need quick and efficient tools
							to process and format their text. It’s lightweight, easy to use,
							and accessible from any device.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
