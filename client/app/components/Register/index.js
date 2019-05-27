import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { register } from "../../actions";
import "./index.css";

export class Register extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      designation: "",
      email: "",
      domain: "",
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
      .register(this.state)
      .then(() => this.props.history.push("/"))
      .catch(err => this.setState({ error: true }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="updateProfileContainer">
          {this.state.error && (
            <div className="field is-horizontal">
              <div className="field-label is-normal span_placement registerWrapper-error">
                <span>Failed to Add</span>
              </div>
            </div>
          )}
          <div className="columns is-mobile">
            <div className="column">
              <div className="editors row-split">
                <div className="column-split">
                  <span className="sub-title">Name</span>
                </div>
                <div className="column-split1">
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>

              <div className="editors row-split">
                <div className="column-split">
                  <span className="sub-title">Age</span>
                </div>
                <div className="column-split1">
                  <input
                    type="number"
                    name="age"
                    value={this.state.age}
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>

              <div className="editors row-split">
                <div className="column-split">
                  <span className="sub-title">Email</span>
                </div>
                <div className="column-split1">
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>

              <div className="editors row-split">
                <div className="column-split">
                  <span className="sub-title">Phone</span>
                </div>
                <div className="column-split1">
                  <input
                    type="text"
                    name="phone"
                    value={this.state.Phone}
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>

              <div className="editors row-split">
                <div className="column-split">
                  <span className="sub-title">Designation</span>
                </div>
                <div className="column-split1">
                  <input
                    type="text"
                    value={this.state.designation}
                    className="text-editors"
                    name="designation"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>

              <div className="editors row-split">
                <div className="column-split">
                  <span className="sub-title">Department</span>
                </div>
                <div className="column-split1">
                  <input
                    type="text"
                    name="department"
                    value={this.state.department}
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>

              <div className="editors row-split">
                <div className="column-split">
                  <span className="sub-title">Deleveries</span>
                </div>
                <div className="column-split1">
                  <input
                    type="text"
                    value={this.state.deleveries}
                    name="deleveries"
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>

              <div className="editors row-split">
                <div className="column-split">
                  <span className="sub-title">location</span>
                </div>
                <div className="column-split1">
                  <input
                    type="text"
                    name="location"
                    value={this.state.location}
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="editors row-split">
                <div className="column-split">
                  <span className="sub-title">Experience</span>
                </div>
                <div className="column-split1">
                  <input
                    type="text"
                    name="experience"
                    value={this.state.experience}
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>

              <div className="editors row-split">
                <div className="column-split">
                  <span className="sub-title">Technologies</span>
                </div>
                <div className="column-split1">
                  <input
                    type="text"
                    value={this.state.technologies}
                    className="text-editors"
                    name="technologies"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>

              <div className="editors row-split">
                <div className="column-split">
                  <span className="sub-title">dob</span>
                </div>
                <div className="column-split1">
                  <input
                    type="text"
                    name="dob"
                    value={this.state.dob}
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>

              <div className="editors row-split">
                <div className="column-split">
                  <span className="sub-title">Upload Photo</span>
                </div>
                <div className="column-split1">
                  <div className="file is-info">
                    <label className="file-label">
                      <input
                        className="file-input"
                        type="file"
                        name="photo"
                        ref={this.photo}
                      />
                      <span className="file-cta">
                        <span className="file-icon">
                          <i className="fas fa-upload" />
                        </span>
                        <span className="file-label">Choose a file…</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="editors row-split">
                <div className="column-split">
                  <span className="sub-title">Upload certifications</span>
                </div>
                <div className="column-split1">
                  <div className="file is-info">
                    <label className="file-label">
                      <input
                        className="file-input"
                        type="file"
                        name="certifications"
                        multiple
                        ref={this.certifications}
                      />
                      <span className="file-cta">
                        <span className="file-icon">
                          <i className="fas fa-upload" />
                        </span>
                        <span className="file-label">Choose files …</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-wrapper">
            <input
              className="button button-style is-primary"
              type="submit"
              value="Save"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    register(user) {
      return dispatch(register(user));
    }
  })
)(Register);
