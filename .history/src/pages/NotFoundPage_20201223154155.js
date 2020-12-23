import React from 'react';
import { Link } from 'react-router-dom';

const  NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <h1>404 - page not found</h1>
        <Link to={'/'} className="ui button primary">
          Back to homepage
        </Link>
      </div>
    );
  }
}

export default NotFoundPage;
