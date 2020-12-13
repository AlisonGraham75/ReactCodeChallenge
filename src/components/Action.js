const { default: Header } = require("./Header");

import React from 'react';

const Action = (props) => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
    >
      What should I do?
    </button>
  </div>
);

  export default Action;