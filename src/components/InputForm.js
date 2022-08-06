import React, { useState } from 'react'
import { Button } from '../styled-components/Button'
import { Form } from '../styled-components/Form'
import ErrorModal from './ErrorModal'




const InputForm = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError]  = useState(null)
    
    

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if(enteredUsername.trim().length === 0 | enteredAge.trim().length === 0) {
      setError({
        title: 'Incomplete',
        message: 'Please enter a valid input greater than zero (no empty values)'
      })
      setEnteredUsername('')
      setEnteredAge('')
      return
    }
    if(enteredUsername.trim().length === 0) {
      setError({
        title: 'Empty name',
        message: 'Please enter a valid input greater than zero (no empty values)'
      })
      setEnteredUsername('')
      setEnteredAge('')
      return
    }
    
    if(+enteredAge < 1) {
      setError({
        title: 'Invalid number',
        message: 'Please enter a valid number greater than zero (no empty values)'
      })
      setEnteredAge('')
      return
    }

    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
    
  }

    const handleUsernameChange = (event) => {
        setEnteredUsername(event.target.value)
    }

    const handleAgeChange = (event) => {
        setEnteredAge(event.target.value)
    }

    const handleErrorState = () => {
      setError(null)
    }

  return (
    
    <>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={handleErrorState}/>}
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
        placeholder='Enter a reasonable number here' />

        <Button>Add User</Button>
    </Form>
    </>
  )
}

export default InputForm