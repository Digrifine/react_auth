import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import { Alert } from 'react-bootstrap';

const emailRegex = RegExp(
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
);

const formValid = ({ formErrors, ...rest }) => {
	let valid = true;

	// validate form errors being empty
	Object.values(formErrors).forEach((val) => {
		val.length > 0 && (valid = false);
	});

	// validate the form was filled out
	Object.values(rest).forEach((val) => {
		val === null && (valid = false);
	});

	return valid;
};

export class UserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			step: 1,
			salutation: '',
			firstName: '',
			middleName: '',
			lastName: '',
			company: '',
			title: '',
			email: '',
			confirmEmail: '',
			phone: '',
			fax: '',
			mobile: '',
			formErrors: {
				salutation: '',
				firstName: '',
				lastName: '',
				company: '',
				title: '',
				email: '',
				phone: '',
			},
			loading: true,
		};
	}

	// Proceed to next step
	nextStep = () => {
		const { step, formErrors } = this.state;
		if (formValid(formErrors)) {
			this.setState({
				loading: false,
				step: step + 1,
			});
		}
	};

	// Go back to prev step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		if (formValid(this.state)) {
			console.log(`
			--SUBMITTING--
			Solutation: ${this.state.salutation}
			First Name: ${this.state.firstName}
			Last Name: ${this.state.lastName}
			Company: ${this.state.company}
			Title: ${this.state.title}
	  		Email: ${this.state.email}
			Confirm Email: ${this.state.confirmEmail}
			Phone: ${this.state.phone}
			`);
		} else {
			console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
		}
	};

	// Handle fields change
	handleChange = (input) => (e) => {
		e.preventDefault();
		this.setState({ [input]: e.target.value });
		const { name, value } = e.target;
		let formErrors = { ...this.state.formErrors };

		switch (name) {
			case 'firstName':
				formErrors.firstName =
					value.length === 0 ? 'First Name is required ' : '';
				break;
			case 'lastName':
				formErrors.lastName =
					value.length === 0 ? 'Last Name is required ' : '';
				break;
			case 'salutation':
				formErrors.salutation =
					value.length === 0 ? 'Salutation is required ' : '';
				break;
			case 'company':
				formErrors.company = value.length === 0 ? 'Company is required ' : '';
				break;
			case 'title':
				formErrors.titlte = value.length === 0 ? 'First Name is required ' : '';
				break;
			case 'email':
				formErrors.email = emailRegex.test(value)
					? ''
					: 'invalid email address';
				break;
			case 'confirmEmail':
				formErrors.confirmEmail = '';
				break;
			case 'phone':
				formErrors.phone = value.length === 0 ? 'First Name is required ' : '';
				break;
			default:
				break;
		}
		this.setState({ formErrors, [name]: value }, () => console.log(this.state));
	};

	render() {
		const { step } = this.state;

		const {
			salutation,
			firstName,
			middleName,
			lastName,
			company,
			title,
			email,
			confirmEmail,
			phone,
			fax,
			mobile,
			loading,
		} = this.state;
		const values = {
			salutation,
			firstName,
			middleName,
			lastName,
			company,
			title,
			email,
			confirmEmail,
			phone,
			fax,
			mobile,
			loading,
		};

		switch (step) {
			case 1:
				return (
					<FormUserDetails
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values}
						formErrors={this.state.formErrors}
					/>
				);
			case 2:
				return (
					<FormPersonalDetails
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 3:
				return (
					<Confirm
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						values={values}
					/>
				);
			case 4:
				return <Success />;
			default:
				console.log('This is a multi-step form built with React.');
		}
	}
}

export default UserForm;
