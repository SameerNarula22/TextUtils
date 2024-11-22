import React, { useState } from 'react';

export default function TextForm(props) {
	const [text, setText] = useState('Enter Text Here');

	const ConvertUpCase = () => {
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert('Text converted to Uppercase', 'success');
	};

	const ConvertLowerCase = () => {
		let newText2 = text.toLowerCase();
		setText(newText2);
		props.showAlert('Text converted to Lowercase', 'success');
	};

	const handleOnChange = (event) => {
		setText(event.target.value);
	};

	const textInvert = () => {
		const swapCase = (str) =>
			str
				.split('')
				.map((char) =>
					char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
				)
				.join('');
		let invertedText = swapCase(text);
		setText(invertedText);
		props.showAlert('Text case inverted', 'success');
	};

	const clearText = () => {
		setText('');
		props.showAlert('Text cleared', 'success');
	};

	const handleinverseclick = () => {
		let reversedText = text.split('').reverse().join('');
		setText(reversedText);
		props.showAlert('Text reversed', 'success');
	};

	const speak = () => {
		let msg = new SpeechSynthesisUtterance(text);
		window.speechSynthesis.speak(msg);
		props.showAlert('Text-to-speech started', 'success');
	};

	const capitalizeSentences = () => {
		const sentences = text
			.toLowerCase()
			.split(/(?<=[.!?])\s+/)
			.map((sentence) => {
				return sentence.length > 0
					? sentence.charAt(0).toUpperCase() + sentence.slice(1)
					: '';
			});

		let result = sentences.join(' ');

		if (!/[.!?]$/.test(result) && result.length > 0) {
			result += '.';
		}
		localStorage.setItem('textBackup', text);

		setText(result);
		props.showAlert('Text punctuated and saved!', 'success');
	};

	const Undo = () => {
		let storedText = localStorage.getItem('textBackup');
		if (storedText) {
			setText(storedText);
			props.showAlert('Undo successful', 'success');
		} else {
			props.showAlert('No previous text to undo', 'warning');
		}
	};

	// Heading color based on dark mode
	const headingStyle = {
		color: props.darkMode ? 'white' : 'black',
	};

	return (
		<>
			<div className='mb-3 my-3'>
				<h1 style={headingStyle}>{props.heading}</h1>{' '}
				{/* Heading color changes */}
				<div>
					<textarea
						className='form-control'
						id='exampleFormControlTextarea1'
						style={{
							backgroundColor: props.darkMode ? '#6c757d' : 'white',
							color: props.darkMode ? 'white' : 'black',
						}}
						value={text}
						onChange={handleOnChange}
						rows='7'></textarea>
				</div>
				<button className='btn btn-primary my-3' onClick={ConvertUpCase}>
					Convert to Uppercase
				</button>
				<button
					className='btn btn-primary my-3 mx-3'
					onClick={ConvertLowerCase}>
					Convert to Lowercase
				</button>
				<button className='btn btn-primary mx-2 my-3' onClick={textInvert}>
					Invert Case
				</button>
				<button className='btn btn-primary my-3' onClick={handleinverseclick}>
					Reverse
				</button>
				<button
					className='btn btn-primary my-3 mx-3'
					onClick={capitalizeSentences}>
					Punctuate and Save
				</button>
				<button className='btn btn-primary my-3 mx-3' onClick={speak}>
					Speak
				</button>
				<button className='btn btn-primary my-3 mx-3' onClick={Undo}>
					Undo
				</button>
				<button className='btn btn-primary my-3 mx-3' onClick={clearText}>
					Clear
				</button>
			</div>
			<p className='paragraph my-3'>
				{
					text
						.trim()
						.split(/\s+/)
						.filter((word) => word).length
				}{' '}
				words and {text.length} characters
			</p>
			<div className='container my-3'>
				<h2 style={headingStyle}>Preview:</h2>
				<p className='paragraph my-3'>
					{text.length > 0 ? text : 'Nothing to preview'}
				</p>
			</div>
		</>
	);
}
