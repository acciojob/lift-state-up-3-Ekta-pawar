import React from 'react'

const Child2 = ({updated}) => {
  return (
    <div className='child2'>
        <button onClick={()=>updated("option 2")}>Select Option 2</button>
    </div>
  )
}

export default Child2