mport PropTypes from 'prop-types';

const Loading = ({ message = 'Loading...' }) => (
  <div className="ui active dimmer">
    <div className="ui ig text loader">{message}</div>
  </div>
);

Spinner.propTypes = {
  message: PropTypes.string.isRequired
};

export default Loading;
