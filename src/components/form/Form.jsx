import { useState } from 'react';

const Form = () => {
	const [formValues, setFormValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	});

	console.log(formValues);

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<input
					type='text'
					placeholder='First Name'
					value={formValues.firstName}
					onInput={event =>
						setFormValues({ ...formValues, firstName: event.target.value })
					}
				/>
			</div>
			<div>
				<input
					type='text'
					placeholder='Last Name'
					onInput={event =>
						setFormValues({ ...formValues, lastName: event.target.value })
					}
				/>
			</div>
			<div>
				<input
					type='email'
					placeholder='Email Address'
					onInput={event =>
						setFormValues({ ...formValues, email: event.target.value })
					}
				/>
			</div>
			<div>
				<input
					type='password'
					placeholder='Password'
					onInput={event =>
						setFormValues({ ...formValues, password: event.target.value })
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

export default Form;
