import React from 'react';
import { useState } from 'react';
// class Dropdown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { term: '' };
//   }

const Dropdown = () => {
  const [term, setTerm] = useState('');

  onSelectChange = (event) => {
    this.setState({ term: event.target.value });
    this.props.onSelectChange(event);
  };

  render() {
    const { forces } = this.props;

    return (
      <div>
        <label htmlFor="forces">Please select a force:</label>
        <br />
        <select
          name="forces"
          id="forces"
          value={this.state.term}
          onChange={this.onSelectChange}
        >
          <option value="">Please select...</option>
          {forces.map((item) => {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
export default Dropdown;
