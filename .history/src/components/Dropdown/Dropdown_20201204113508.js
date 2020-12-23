import React from 'react';

// const Dropdown = ({ forces, onSelectChange }) => {
class FormSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onSelectChange = (event) => {
    this.setState({ term: event.target.value });
    this.props.onSelectChange(event);
  };

  render() {
    return (
      <div>
        <label htmlFor="forces">Choose a force:</label>
        <select
          name="forces"
          id="forces"
          value={this.state.term}
          onChange={this.onSelectChange}
        >
          {this.props.forces.map((item) => {
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
