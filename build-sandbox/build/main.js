import React from 'react';
import ReactDOM from 'react-dom';

const App = () => React.createElement("p", null, "Hello");

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));