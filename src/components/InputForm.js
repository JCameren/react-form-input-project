import React, { useState } from 'react'
import { Button } from '../styled-components/Button'
import { Form } from '../styled-components/Form'
import { User } from './User'



const InputForm = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  }

    const handleUsernameChange = (event) => {
        setEnteredUsername(event.target.value)
    }

    const handleAgeChange = (event) => {
        setEnteredAge(event.target.value)
    }

  return (
    <>
    <Form onSubmit={handleFormSubmit}>
        <label>Username</label>
        <input type='text'
        onChange={handleUsernameChange}
        value={enteredUsername}
        placeholder='Enter a nice name here' />

        <label>Age(Years)</label>
        <input type='number'
        onChange={handleAgeChange}
        value={enteredAge}
        placeholder='Enter number here' />

        <Button>Add User</Button>
    </Form>
    <User />
    </>
  )
}

export default InputForm