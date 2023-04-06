import React, { useState } from 'react';

const Edit = (props) => {
  const [state, setState] = useState(true);

  const toggleState = () => {
    setState(!state);
  };

  return (
    <button
      style={{
        backgroundColor: state ? 'papayawhip' : 'violet',
      }}
      onClick={toggleState}
    >
      Click me to change color
    </button>
  );
};

export default Edit;
