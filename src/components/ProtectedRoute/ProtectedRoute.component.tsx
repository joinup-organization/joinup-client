/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useContext, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { UserContext } from '../../User.context'

const ProtectedRoute: React.FC<RouteComponentProps> = ({ history }) => {
  const { user } = useContext(UserContext)

  useEffect(() => {
    if (!user) {
      history.push('/login')
    }

    history.push('/home')
  }, [user])

  return (<></>)
}

export default ProtectedRoute
