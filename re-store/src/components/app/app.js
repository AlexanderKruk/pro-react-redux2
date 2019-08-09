import React from 'react';
import ErrorBoundry from '../error-boundry';
import Spinner from '../spinner';

const App = () => {
  return (
    <ErrorBoundry>
      <Spinner />
    </ErrorBoundry>
  );
}

export default App;