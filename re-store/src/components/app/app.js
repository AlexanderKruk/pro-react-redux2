import React from 'react';
import ErrorBoundry from '../error-boundry';
import Spinner from '../spinner';
import './app.css';

const App = () => {
  return (
    <ErrorBoundry>
      <Spinner />
    </ErrorBoundry>
  );
}

export default App;