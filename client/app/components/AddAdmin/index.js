import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addadmin } from "../../actions";
import "./index.css";

export class AddAdmin extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      success: false,
      error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props
      .addadmin(this.state)
      .then(() => this.setState({ success: true, error: false }))
      .catch(err => this.setState({ error: true, success: fase }));
  }

  render() {
    return (
      <div className="registerWrapper">
        <div className="card">
          <form onSubmit={this.handleSubmit}>
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
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={this.handleChange.bind(this)}
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
                        placeholder="password"
                        name="password"
                        onChange={this.handleChange.bind(this)}
                      />
                    </p>
                  </div>
                </div>
              </div>

              <div className="is-horizontal is-horizantal-custom">
                <button
                  type="submit"
                  className="button is-link submit-email login_btn"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    addadmin(admin) {
      return dispatch(addadmin(admin));
    }
  })
)(AddAdmin);
