import React from 'react'

const Child1 = ({updated}) => {
  return (
    <div>
        <button onClick={()=>updated("option 1")}>        Select Option 1
</button>
    </div>
  )
}

export default Child1