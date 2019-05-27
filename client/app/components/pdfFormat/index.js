import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions";
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
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.id).then(data =>
      this.setState({
        persons: data
      })
    );
  }

  render() {
    return (
      <div className="pdf_bottom">
        <div className="card">
          <div className="card-content">
            <div className="content" />
            <div className="columns is-mobile">
              <div className="column">
                <div className="editors row-split">
                  <div className="column-split">
                    <img
                      src="https://www.quickensoftwaresupport.com/wp-content/uploads/2018/02/client-manager.jpg"
                      alt=""
                      className="image_pdf"
                    />
                  </div>
                  <div className="column-split1">
                    <span className="main-sub-title">Name: {this.state.persons.name}</span>
                    <br />
                    <span className="main-sub-title">
                      Mobile No: {this.state.persons.phone}
                    </span>
                    <br />
                    <span className="main-sub-title">Desgination: {this.state.persons.designation}</span>
                    <br />
                    <span className="main-sub-title">
                      Email: {this.state.persons.email}
                    </span>
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">DOB</span>
                  </div>
                  <div className="column-split1">
                    <span className="value-title">{this.state.persons.dob}</span>
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Location</span>
                  </div>
                  <div className="column-split1">
                    <span className="value-title">{this.state.persons.location}</span>
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Department</span>
                  </div>
                  <div className="column-split1">
                    <span className="value-title">{this.state.persons.department}</span>
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Age</span>
                  </div>
                  <div className="column-split1">
                    <span className="value-title">{this.state.persons.age}</span>
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Experience</span>
                  </div>
                  <div className="column-split1">
                    <span className="value-title">{this.state.persons.experience}</span>
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Technology</span>
                  </div>
                  <div className="column-split1">
                    <span className="value-title">{this.state.persons.technologies}</span>
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Certifications</span>
                  </div>
                  <div className="column-split1">
                    <span className="value-title">Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              Download
            </a>
            <a href="#" className="card-footer-item">
              Chat
            </a>
            <a href="#" className="card-footer-item">
              forward
            </a>
          </footer>
        </div>
      </div>
    );
  }
}

// export default UpdateProfile;
export default connect(
  null,
  dispacth => ({
    getUser(id) {
      return dispacth(getUser(id));
    }
  })
)(UpdateProfile);
