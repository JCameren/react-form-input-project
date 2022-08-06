import React from 'react'
import Card from '../styled-components/Card'

const User = (props) => {
  return (
    <ul>{props.users.map((user) => 
      <li key={user.id}>
        <Card>
         <h2> {user.name}, {user.age} years old </h2>
        </Card>
      </li>
      )}
    </ul>
  )
}

export default User