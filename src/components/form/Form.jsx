import { useState } from 'react';

const Form = () => {
	const [formValues, setFormValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		errors: {
			firstName: false,
			lastName: false,
			email: false,
			password: false
		}
	});

	console.log(formValues.errors);

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<input
					type='text'
					placeholder='First Name'
					name='firstName'
					onInput={event =>
						changeFormValues(formValues, setFormValues, event.target)
					}
				/>
			</div>
			<div>
				<input
					type='text'
					placeholder='Last Name'
					name='lastName'
					onInput={event =>
						changeFormValues(formValues, setFormValues, event.target)
					}
				/>
			</div>
			<div>
				<input
					type='email'
					placeholder='Email Address'
					name='email'
					onInput={event =>
						changeFormValues(formValues, setFormValues, event.target)
					}
				/>
			</div>
			<div>
				<input
					type='password'
					placeholder='Password'
					name='password'
					onInput={event =>
						changeFormValues(formValues, setFormValues, event.target)
					}
				/>
			</div>
			<input type='submit' value='CLAIM YOUR FREE TRIAL' />
			<span>
				By clicking the button, you are agreeing to our Terms and Services
			</span>
		</form>
	);
};

const handleSubmit = ev => {
	ev.preventDefault();
};

const validateForm = (name, value, formValues, setFormValues) => {
	const formatedValue = value.trim();
	const regexOnlyLetters = /^[a-z]+$/;
	const regexEmail =
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
	// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
	const regexPassword =
		/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

	if (name === 'firstName') {
		const isValidName = !regexOnlyLetters.test(formatedValue);
		setFormValues({
			...formValues,
			errors: {
				...formValues.errors,
				firstName: isValidName
			}
		});
	}

	if (name === 'lastName') {
		const isValidName = !regexOnlyLetters.test(formatedValue);
		setFormValues({
			...formValues,
			errors: {
				...formValues.errors,
				lastName: isValidName
			}
		});
	}

	if (name === 'email') {
		const isValidEmail = !regexEmail.test(formatedValue);
		setFormValues({
			...formValues,
			errors: {
				...formValues.errors,
				email: isValidEmail
			}
		});
	}

	if (name === 'password') {
		const isValidPassword = !regexPassword.test(formatedValue);
		setFormValues({
			...formValues,
			errors: {
				...formValues.errors,
				password: isValidPassword
			}
		});
	}
};

const changeFormValues = (formValues, setFormValues, { name, value }) => {
	setFormValues({ ...formValues, [name]: value });
	validateForm(name, value, formValues, setFormValues);
};

export default Form;
