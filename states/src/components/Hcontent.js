import React from 'react'

function Hcontent({id}) {
  return (
    <div style={{border: '1px solid red', width: 180, margin: '10px'}}>{`Click to display! ${id}`} </div>
  )
}

export default Hcontent