import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logInUser } from "../../actions/index";
import "./index.css";

export class Admin extends PureComponent {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      success: false,
      error: false
    };
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }
  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) this.props.history.push("/dashboard");
  // }

  handleLogIn() {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props
      .logInUser(userData)
      .then(() => this.setState({ success: true, error: false }))
      .catch(err => this.setState({ error: true, success: false }));
  }

  handleUserNameChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    if (this.props.auth.isAuthenticated) this.props.history.push("/register");

    return (
      <div className="registerWrapper">
        <div className="card">
          <div className="content card-custom-top">
            {this.state.success && (
              <div className="field is-horizontal">
                <div className="field-label is-normal span_placement registerWrapper-success">
                  <span>Successfully Added</span>
                </div>
              </div>
            )}
            {this.state.error && (
              <div className="field is-horizontal">
                <div className="field-label is-normal span_placement registerWrapper-error">
                  <span>Failed to Add</span>
                </div>
              </div>
            )}
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Email</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleUserNameChange}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Password</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="is-horizontal is-horizantal-custom">
              <button
                type="submit"
                className="button is-link submit-email login_btn"
                onClick={this.handleLogIn}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logInUser: userData => dispatch(logInUser(userData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Admin));
