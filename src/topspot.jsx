import React from 'react';

export default props => (
  <div className='well'>
    <div className='card-body'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a type='button' className='btn btn-primary' style={{ color: "blue" }}
    href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`}>Location</a>
    </div>
  </div>
);
