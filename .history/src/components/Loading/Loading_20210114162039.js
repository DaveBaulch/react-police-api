import PropTypes from 'prop-types';

const Loading = ({ message = 'Loading...' }) => (
  <div className="ui active dimmer">
    <div className="ui ig text loader">{message}</div>
  </div>
);

Loading.propTypes = {
  message: PropTypes.string
};

export default Loading;
