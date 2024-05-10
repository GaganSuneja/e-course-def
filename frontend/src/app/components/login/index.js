import React from 'react';
import { FormInput } from '../buttons';
import { connect } from 'react-redux';
import { login } from './action';
import { authApi } from '../../api/authApi';
import { USER, USER_PROFILE, _ID } from '../../constants';
import { PuffLoader } from 'react-spinners';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: '', password: '', isForgotPassword: false, loginError: '', showLoader: false };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.forgotPassword = this.forgotPassword.bind(this);
		this.submitForgotPassword = this.submitForgotPassword.bind(this);
	}

	componentDidMount() {
		if (this.props.userId) {
			this.props.history.push('/course');
		}
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		const payload = {
			email: this.state.email,
			password: this.state.password
		};
		this.setState({ ...this.state, showLoader: true, loginError: '' });

		if (!payload.email || !payload.password) {
			this.setState({ ...this.state, loginError: 'Please enter email and password' });
			return;
		}
		this.props.login(payload).then(() => {
			this.props.history.push('/course');
		}).catch((error) => {
				console.log(error.response);
				this.setState({ ...this.state, loginError: 'Either email or password is incorrect!' });
			}
		).finally(() => {
			this.setState({ ...this.state, showLoader: false });

		});
	}

	forgotPassword() {
		this.setState({ email: '', isForgotPassword: true });
	}

	submitForgotPassword() {
		authApi
			.forgotPassword({ email: this.state.email })
			.then((res) => console.log(res));
	}

	render() {
		return (

			<div className="row no-gutters">
				<div className="col-lg-3"/>
				<div className="col">
					<form onSubmit={this.handleSubmit} className="form-container">
						<h1>Teacher Login</h1>
						{/* <label htmlFor="username"> Username</label> */}
						<div style={{ textAlign: 'center', color: 'red' }}>
							<span>{this.state.loginError}</span>
						</div>
						<br/>
						<FormInput
							type="text"
							placeholder="Email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
							classes="form-input"
							enableFormClasses={true}
						/>
						{!this.state.isForgotPassword && (
							<FormInput
								type="password"
								placeholder="Password"
								name="password"
								value={this.state.password}
								classes="form-input"
								onChange={this.handleChange}
								enableFormClasses={true}
							/>
						)}
						<div className="row no-gutters">
							{!this.state.isForgotPassword && (
								!this.state.showLoader ?
									(<input
										type="submit"
										value="Login"
										className="btn btn-primary col-lg-12 form-submit"
									/>) : (<div style={{ margin: '0 auto' }}><PuffLoader color={'#18afe6'} loading={true}/></div>)
							)}
						</div>
					</form>
				</div>
				<div className="col-lg-3"/>
			</div>
		);
	}
}

function mapState(state) {
	const userId = state[USER]?.[USER_PROFILE]?.[_ID];
	return {
		'userId': userId
	};
}

export default connect(mapState, { login })(LoginForm);
