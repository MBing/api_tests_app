import React, { Component } from 'react';
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';

class Profile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userProfile: this.props.userProfile || {},
      editing: false,
      error: false
    };
  }
  componentDidMount () {
    this.props.fetchProfile();
  }

  // will fill in the initial data on the component
  componentDidUpdate (prevProps) {
    if (prevProps.profile !== this.props.profile) {
      this.setState({
        userProfile: this.props.profile
      });
    }
  }

  // when data is changed, this is triggered
  updateValue (type = '', event = '') {
    let userProfileCopy = JSON.parse(JSON.stringify(this.state.userProfile));

    userProfileCopy[type] = event.target.value;
    this.setState({
      userProfile: userProfileCopy
    });
  }

  saveProfile () {
    let error = false;
    const propertiesToCheck = ['name', 'bio', 'location', 'company'];
    propertiesToCheck.forEach(term => {
      if (this.state.userProfile[term] === '') {
        error = true;
      }
    });

    if (!error) {
      this.props.saveProfile(this.state.userProfile);
    }

    this.setState({
      error: error
    });
  }

  render () {
    return (
      <div className="container">
        <Button
          bsStyle="primary"
          onClick={() => this.setState({editing: !this.state.editing})}
        >
          { this.state.editing ? 'Cancel' : 'Edit' }
        </Button>
        <hr />
        {this.state.editing ?
            <FormGroup>
              <ControlLabel>Name</ControlLabel>
              <FormControl
                type="text"
                className={this.state.error && this.state.userProfile.name === '' ? 'red-border' : ''}
                value={this.state.userProfile.name}
                placeholder="Enter text"
                onChange={this.updateValue.bind(this, 'name')}
              />
              <FormControl.Feedback />
              <ControlLabel>Bio</ControlLabel>
              <FormControl
                type="text"
                className={this.state.error && this.state.userProfile.bio === '' ? 'red-border' : ''}
                value={this.state.userProfile.bio}
                placeholder="Enter text"
                onChange={this.updateValue.bind(this, 'bio')}
              />
              <FormControl.Feedback />
              <ControlLabel>Location</ControlLabel>
              <FormControl
                type="text"
                className={this.state.error && this.state.userProfile.location === '' ? 'red-border' : ''}
                value={this.state.userProfile.location}
                placeholder="Enter text"
                onChange={this.updateValue.bind(this, 'location')}
              />
              <FormControl.Feedback />
              <ControlLabel>Company</ControlLabel>
              <FormControl
                type="text"
                className={this.state.error && this.state.userProfile.company === '' ? 'red-border' : ''}
                value={this.state.userProfile.company}
                placeholder="Enter text"
                onChange={this.updateValue.bind(this, 'company')}
              />
              <FormControl.Feedback />
              <Button bsStyle="info" onClick={this.saveProfile.bind(this)}>Save</Button>
            </FormGroup>
          :
            <div>
              <p><strong>Name: </strong>{this.state.userProfile.name}</p>
              <p><strong>Bio: </strong>{this.state.userProfile.bio}</p>
              <p><strong>Location: </strong>{this.state.userProfile.location}</p>
              <p><strong>Company: </strong>{this.state.userProfile.company}</p>
            </div>
        }
      </div>
    );
  }
}

export default Profile;
