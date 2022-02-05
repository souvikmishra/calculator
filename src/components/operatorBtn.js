import React from 'react';

function OperatorBtn(props) {
  return (
    <button
      className="operator"
      onClick={() =>
        props.handleOperatorCallback(props.btnAttributes.operatorSymbol)
      }
    >
      {props.btnAttributes.operatorName}
    </button>
  );
}

export default OperatorBtn;
