import React from 'react';

const Counter = ({ counter, inc, dec , rnd}) => {
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button className="btn btn-primary btn-lg"
              onClick={inc}>INC</button>
      <button className="btn btn-primary btn-lg"
              onClick={dec}>DEC</button>
      <button className="btn btn-primary btn-lg"
              onClick={rnd}>RND</button>
    </div>
  );
}

export default Counter;