import React from 'react'
import Content from "./Content"
import Button from './Button'
import Hcontent from './Hcontent'

function Profile({people,handleChange}) {

  return (
    <div>
      {people.map((person, key) => (
        <>
          {person.shows ? (
            <Content person={person} key={key} />
          ) : (
            <Hcontent person={person} key={key} id={person.id} />
          )}

          <Button 
          id={person.id} 
          shows ={person.shows}
          fullName={person.fullName}
          handleChange={handleChange} />
        </>
      ))}
       
    </div>
  )
}

export default Profile
