import { Component } from 'react';
import axios from 'axios';
import Dropdown from '../Dropdown';

const ForcesItem = (props) => {

  return (
    console.log(this.props.forces);
    <Dropdown options={this.props.forces} />
  );
};

export default Forces;
