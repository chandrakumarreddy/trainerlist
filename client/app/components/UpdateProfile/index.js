import React, { PureComponent } from "react";
import { update, getUser } from "../../actions";
import { connect } from "react-redux";
import "./index.css";

export class UpdateProfile extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      persons: {
        name: "",
        age: "",
        email: "",
        phone: "",
        designation: "",
        department: "",
        deleveries: "",
        location: "",
        experience: "",
        technologies: "",
        dob: ""
      }
    };
    this.formData = new FormData();
    this.photo = React.createRef();
    this.certifications = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.id).then(data =>
      this.setState({
        persons: data
      })
    );
  }

  handleChange(event) {
    this.setState({
      persons: Object.assign({}, this.state.persons, {
        [event.target.name]: event.target.value
      })
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const cert_files = Array.from(this.certifications.current.files);
    let certs = [];
    cert_files.forEach((file, i) => {
      certs.push(file);
    });
    this.formData.append("photo", this.photo.current.files[0]);
    this.formData.append("certification", certs[0]);
    this.formData.append("name", this.state.persons.name);
    this.formData.append("age", this.state.persons.age);
    this.formData.append("phone", this.state.persons.phone);
    this.formData.append("designation", this.state.persons.designation);
    this.formData.append("department", this.state.persons.department);
    this.formData.append("deleveries", this.state.persons.deleveries);
    this.formData.append("location", this.state.persons.location);
    this.formData.append("experience", this.state.persons.experience);
    this.formData.append("technologies", this.state.persons.technologies);
    this.formData.append("dob", this.state.persons.dob);
    this.props
      .update(this.props.match.params.id, this.formData)
      .then(() => this.props.history.push("/profile"));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="updateProfileContainer">
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
                    value={this.state.persons.name}
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
                    value={this.state.persons.age}
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
                    value={this.state.persons.email}
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
                    value={this.state.persons.phone}
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
                    value={this.state.persons.designation}
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
                    value={this.state.persons.department}
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
                    value={this.state.persons.deleveries}
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
                    value={this.state.persons.location}
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
                    value={this.state.persons.experience}
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
                    value={this.state.persons.technologies}
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
                    value={this.state.persons.dob}
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
  dispacth => ({
    update(id, user) {
      return dispacth(update(id, user));
    },
    getUser(id) {
      return dispacth(getUser(id));
    }
  })
)(UpdateProfile);
