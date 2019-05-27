import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logInAdmin } from "../../actions/index";
import "./index.css";

export class Admin extends PureComponent {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
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
    this.props.logInAdmin(userData);
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
    if (this.props.auth.isAuthenticated) this.props.history.push("/addadmin");

    return (
      <div className="registerWrapper">
        <div className="card">
          <div className="content card-custom-top">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Email</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="text"
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
    logInAdmin: userData => dispatch(logInAdmin(userData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Admin));
