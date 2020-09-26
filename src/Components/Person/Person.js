import React from 'react';

import './Person.css';



function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your age: {props.age}</p>
    </div>
  );
}

var app = (
  <div>
    <person name = "mohamad" age = "26" />
    <person name = "taha" age = "17" />
  </div>
);

export default Person ;
