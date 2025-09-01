import React from "react";

const Child1 = ({ updated }) => {
  return (
    <div>
      <button onClick={() => updated("Option 1")}>
        Select Child 1
      </button>
    </div>
  );
};

export default Child1;
