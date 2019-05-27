import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getUsersByFilter } from "../../actions";
import ProfileListComp from "../ProfileList";
import "./index.css";

export class ProfileSearch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      experience: "",
      department: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSearch() {
    const data = {
      name: this.state.name,
      location: this.state.location,
      experience: this.state.experience,
      department: this.state.department
    };
    console.log('this.state', techno);
    this.props.getUsersByFilter(data);
  }

  render() {
    return (
      <div>
        <div className="columns is-mobile profilesearch filter-background">
          <div className="column">
            <input
              type="text"
              className="input-margin"
              placeholder="Name"
              name="name"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="column ">
            <input
              type="text"
              className="input-margin"
              placeholder="Experience"
              name="experience"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="column">
            <input
              type="text"
              className="input-margin"
              placeholder="Location"
              name="location"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="column">
            <input
              type="text"
              className="input-margin"
              placeholder="Department"
              name="department"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="column">
            <button
              type="submit"
              className="searchButton"
              onClick={this.handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <ProfileListComp {...this.props} />
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    getUsersByFilter(val) {
      return dispatch(getUsersByFilter(val));
    }
  })
)(ProfileSearch);
