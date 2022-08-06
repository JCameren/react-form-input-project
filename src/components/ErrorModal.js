import React from 'react'
import { Button } from '../styled-components/Button'
import Card from '../styled-components/Card'

const ErrorModal = (props) => {
  return (
    <Card>
        <h3>{props.title}</h3>
        <div>
            {props.message}
        </div>
        <Button onClick={props.onConfirm}>Okay</Button>
    </Card>
  )
}

export default ErrorModal