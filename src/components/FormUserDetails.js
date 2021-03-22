import React, { Component } from 'react';
import { Container, Row, Col, Alert, Form, Button } from 'react-bootstrap';

export class FormUserDetails extends Component {

	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	render() {
		const { values, handleChange } = this.props;

		const check = (values) => {
			if (
				values.email === values.confirmEmail &&
				values.salutation !== '' &&
				values.firstName !== '' &&
				values.lastName !== '' &&
				values.company !== '' &&
				values.title !== '' &&
				values.email !== '' &&
				values.phone !== ''
			) {
				return true;
			}
		};
		return (
			<>
				<h5>STEP 1: Contact Info </h5>
				<Container>
					<Form onSubmit={check}>
						<Row>
							<Col>
								<div className="form-group">
									<label htmlFor="salutation">SALUTATION *</label>
									<input
										type="text"
										name="salutation"
										onChange={handleChange('salutation')}
										value={values.salutation}
									/>
									{this.props.formErrors.salutation && (
										<Alert> This field must be filled</Alert>
									)}
								</div>
								<div className="form-group">
									<label htmlFor="firstName">FIRST NAME *</label>
									<input
										type="firstName"
										className="form-control"
										name="firstName"
										onChange={handleChange('firstName')}
										value={values.firstName}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="middleName">MIDDLE NAME</label>
									<input
										type="middleName"
										className="form-control"
										name="middleName"
										onChange={handleChange('middleName')}
										value={values.middleName}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="lastName">LAST NAME *</label>
									<input
										type="lastName"
										className="form-control"
										name="lastName"
										onChange={handleChange('lastName')}
										value={values.lastName}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="company">COMPANY *</label>
									<input
										type="company"
										className="form-control"
										name="company"
										onChange={handleChange('company')}
										value={values.company}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="title">TITLE *</label>
									<input
										type="title"
										className="form-control"
										name="title"
										onChange={handleChange('title')}
										value={values.title}
									/>
								</div>
							</Col>
							<Col>
								<div className="form-group">
									<label htmlFor="email">EMAIL *</label>
									<input
										type="email"
										className="form-control"
										name="email"
										onChange={handleChange('email')}
										value={values.email}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="confirmEmail">CONFIRM EMAIL *</label>
									<input
										type="confirmEmail"
										className="form-control"
										name="confirmEmail"
										onChange={handleChange('confirmEmail')}
										value={values.confirmEmail}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="phone">PHONE *</label>
									<input
										className="form-control"
										name="phone"
										onChange={handleChange('phone')}
										value={values.phone}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="fax">FAX</label>
									<input
										type="fax"
										className="form-control"
										name="fax"
										onChange={handleChange('fax')}
										value={values.fax}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="mobile">MOBILE</label>
									<input
										type="mobile"
										className="form-control"
										name="mobile"
										onChange={handleChange('mobile')}
										value={values.mobile}
									/>
								</div>
							</Col>
						</Row>
						<div className="text-right">
							<Button className="w-100" type="submit" onClick={this.continue}>
								Sign Up
							</Button>
						</div>
					</Form>
				</Container>
			</>
		);
	}
}

export default FormUserDetails;
