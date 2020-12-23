import React from 'react';
import { useState } from 'react';

const DroFormSelectpdown = ({ onFilterSelectChange }) => {
  const [term, setTerm] = useState('');


  const onSelectChange = (event) => {
    this.setState({ term: event.target.value });
    this.props.onFilterSelectChange(event);
  };

  render() {
    const { name, label, items } = this.props;

    return (
      <React.Fragment>
        <label htmlFor={name} className="mr-10">
          {label}
        </label>
        <select
          value={this.state.term}
          name={name}
          id={name}
          onChange={this.onSelectChange}
          className="mr-20"
        >
          {items.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
      </React.Fragment>
    );
  }
}
export default FormSelect;
