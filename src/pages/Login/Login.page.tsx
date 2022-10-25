/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import { FormContainer, LoginContainer, LoginImage, LoginImageContainer, SubmitButton } from './Login.style'
import LoginPicture from './login-image.svg'
import { SubTitle, TerciaryText } from '../../global.style'
import { useFormik } from 'formik'
import { loginSchema } from './Login.schema'
import { Input } from '../../components/Input/Input.component'
import { IUserLogin } from '../../model/user.model'
import { RouteComponentProps } from 'react-router'
import { AuthService } from '../../services/auth.service'
import { UserContext } from '../../User.context'

export const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
  const [isRequesting, setIsRequesting] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { user, setUser } = useContext(UserContext)
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: async (formValues) => {
      await submitLogin(formValues, setIsLoading)
    }
  })

  const submitLogin = async (user: IUserLogin, setIsLoading: Dispatch<SetStateAction<boolean>>) => {
    const authService = new AuthService()
    setIsLoading(true)
    try {
      await authService.login(user)
      setIsLoading(false)
      setUser(authService.getCurrentUser)
      history.push('/home')
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!user) {
      return
    }

    history.push('/home')
  }, [user])

  return (
        <LoginContainer>
                <LoginImageContainer>
                    <LoginImage src={LoginPicture} />
                    <SubTitle>Bem vindo ao Join In!</SubTitle>
                </LoginImageContainer>
                <TerciaryText>Faça login para começar</TerciaryText>
                <FormContainer onSubmit={loginForm.handleSubmit}>
                    <Input name="email" type="email" isRequesting={isRequesting} form={loginForm} placeholder="email" />
                    <Input name="password" type="password" isRequesting={isRequesting} form={loginForm} placeholder="senha" />
                    <SubmitButton disabled={isLoading} color={isLoading ? '#007bff83' : undefined} type="submit" onClick={() => setIsRequesting(true)}>
                        Entrar
                    </SubmitButton>
                </FormContainer>
        </LoginContainer>
  )
}
