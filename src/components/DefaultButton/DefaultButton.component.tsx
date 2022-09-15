import React from 'react'
import { Button } from './DefaultButton.style'

const DefaultButton = ({ text }: {text: string}) => {
  return (
        <Button>{text}</Button>
  )
}

export default DefaultButton
