import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Signup: React.FC = () => {
  return (
    <Fragment>
      <div>Signup</div>
      <Link to="/login">Login</Link>
    </Fragment>
  );
};
