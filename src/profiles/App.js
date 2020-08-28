import React, { Component } from 'react';
import './App.css';
import { profileData } from "./profiles";
import Table from './Table';
import Form from "./Form";
class App extends Component {
  state = {
    profiles: profileData
  };

  removeProfile = (name) => {
    const {profiles} = this.state;
    this.setState({
      profiles: profiles.filter(v => v.name !== name)
    });
  }

  handleSubmit = (profile) => {
    const {profiles} = this.state;
    this.setState({
      profiles : [...profiles, profile]
    })
  }
  render = () => {
    const {profiles} = this.state;
    return (
      <div className="container">
        <h1> Hello World!!</h1>
        <p> Welcome to React learning Class!!</p>
        <Table profileData={profiles} removeProfile={this.removeProfile}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
