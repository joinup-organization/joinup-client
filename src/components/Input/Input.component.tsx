/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { ErrorMessage, FormInput, InputContainer } from './Input.style'

export const Input = ({ name, placeholder, type, isRequesting, form }: {name: string, type: string, placeholder?: string, isRequesting: boolean, form: any}) => {
  return (
        <InputContainer>
            <FormInput name={name} type={type} onChange={form.handleChange} value={form.values[name]} placeholder={placeholder}/>
            {form.errors[name] && isRequesting ? <ErrorMessage>{form.errors[name]}</ErrorMessage> : null}
        </InputContainer>
  )
}
