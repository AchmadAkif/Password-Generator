import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import Slider from './component/Slider';
import { TextField } from '@mui/material';
import { Switch } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';

const options = [
	"Include Number",
	"Include Symbol",
	"Include Uppercase",
	"Include Lowercase",
];

function App() {
	// State variables to manage setting, error, and generated password
	const [setting, setSetting] = useState({
		length: 8,
		uppercase: false,
		lowercase: false,
		number: false,
		symbol: false,
		isError: false,
	});

	const [isError, setIsError] = useState(false);
	const [generatedPassword, setGeneratedPassword] = useState("");

	// Handle Event
	const onSetLength = (value) => {
		setSetting({...setting, length: value});
	}

	const handleOptions = (index) => {
		if (index === 0) {
			setSetting({...setting, number: !setting.number});
		}
		if (index === 1) {
			setSetting({...setting, symbol: !setting.symbol});
		}
		if (index === 2) {
			setSetting({...setting, uppercase: !setting.uppercase});
		}
		if (index === 3) {
			setSetting({...setting, lowercase: !setting.lowercase});
		}
	} 

	// Password generation logic
	const handleGenerate = () => {
		if (
			!setting?.number &&
			!setting?.symbol &&
			!setting?.uppercase &&
			!setting?.lowercase
		) {
			setIsError(true);
			return;
		}

		setIsError(false);
		
		const number = "123456789";
		const symbol = '!@#$%^&*()_+-={}[]|:;"<>,.?/~';
		const uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const lowercase = "abcdefghijklmnopqrstuvwxyz";
		const passwordLength = setting.length;

		let passwordChars = "";
		let password = "";

		if (setting.number) {
			passwordChars += number;
		}
		if(setting.symbol) {
			passwordChars += symbol;
		}
		if (setting.uppercase) {
			passwordChars += uppercase;
		}
		if (setting.lowercase) {
			passwordChars += lowercase;
		}

		for (let i = 0; i < passwordLength; i++) {
			let randomizeIndex = Math.floor(Math.random()*passwordChars.length);
			password += passwordChars[randomizeIndex]
		}
		console.log(password)
	}

  return (
	<section className='w-full h-[100vh] flex justify-center sm:py-10 py-5 bg-background'>
		<div className='flex flex-col justify-between sm:px-16 px-5 font-roboto text-white'>
			<div className='max-w-[1124px]'>
				<h1 className='font-agbalumo text-white text-[37px] mb-5'>Password Generator</h1>
				<label htmlFor="outlined-basic" className='text-[20px]'>Generated Password</label>
				<TextField id="outlined-basic" variant="filled" disabled fullWidth />
				{isError && (
					<span>Please select at least one option</span>
				)}
			</div>
			<div>
				<ul className='flex flex-col space-y-8'> 
				<Slider handleSetLength={onSetLength} />
					{options.map( e => {
						return <li className='flex justify-between' key={options.indexOf(e)}>
							<span className='text-[20px]'>{e}</span>
							<Switch
								onChange={()=>handleOptions(options.indexOf(e))}
							/>
						</li>
					})}
				</ul>
			</div>
			<Button variant="contained" size='large' onClick={handleGenerate}>Generate Password</Button>
		</div>
	</section>
  )
}

export default App
