const Loading = ({ message = 'Loading...' }) => (
  <div className="ui active dimmer">
    <div className="ui ig text loader">{message}</div>
  </div>
);

export default Loading;
