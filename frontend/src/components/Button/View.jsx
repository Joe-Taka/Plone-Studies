import React, { useState } from 'react';

const View = (props) => {
  const [state, setState] = useState(1);

  const inlineStyle = {
    backgroundColor: 'papayawhip',
    color: 'black',
    padding: '10px',
    border: '1px solid black',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={inlineStyle} onClick={() => setState(state + 1)}>
      Counter: {state}
    </button>
  );
};

export default View;
