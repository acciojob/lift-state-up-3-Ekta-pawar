import React from "react";

const Child2 = ({ updated }) => {
  return (
    <div>
      <button onClick={() => updated("Option 2")}>
        Select Child 2
      </button>
    </div>
  );
};

export default Child2;
