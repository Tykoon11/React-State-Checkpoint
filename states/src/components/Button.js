import React from 'react'
import {useState} from 'react'

function Button({id, shows, fullName,handleChange}) {
  return (
    <div className="container">
      <button onClick={() => handleChange(id)} style = {{margin: 10}} type="button" className = {shows ? "btn btn-info" : "btn btn-danger"}>
          {shows ? `Hide ${fullName}` : `View ${fullName}`}
      </button>
    </div>
  )
}

export default Button
