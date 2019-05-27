import React from "react";
// import Register from "../Register";
import { connect } from "react-redux";
import sendEmail from "../../actions";
import "./index.css";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			sent: false,
			error: false,
			emailError: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		if (this.state.email === "") {
			return this.setState({
				emailError: true
			});
		}
		this.props
			.sendEmail(this.state.email)
			.then(res => {
				this.setState({ error: false, sent: true });
			})
			.catch(err => {
				this.setState({ error: true, sent: false });
			});
	}
	handleChange(e) {
		this.setState({
			email: e.target.value,
			emailError: false
		});
	}
	render() {
		return (
			<div className="Home">
				<div className="Home-wrapper">
					<div className="card">
						<div className="card-content">
							<div className="department">
								<div className="center">Department</div>
								<div>
									<div className="select">
										<select>
											<option>Select company</option>
											<option>Alkamia</option>
											<option>IBM</option>
										</select>
									</div>
								</div>
							</div>
							<form onSubmit={this.handleSubmit}>
								<div className="emailer">
									<div className="center">Email </div>
									<div className="field email">
										<div className="control">
											<input
												className="input is-info"
												type="text"
												placeholder="Email here"
												value={this.state.email}
												onChange={this.handleChange}
											/>
											{this.state.emailError && (
												<p className="error center">
													please enter valid email
												</p>
											)}
											<div className="control">
												<button
													className="button is-link submit-email"
													type="submit"
												>
													Submit
												</button>
												{this.state.error && (
													<p className="error center">
														error
													</p>
												)}
												{this.state.sent && (
													<p className="success center">
														Successfully sent mail
													</p>
												)}
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		sendEmail(email) {
			return dispatch(sendEmail(email));
		}
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Home);
