import React from 'react'
import 
{
  LoginContainer,
} from './styles'
import {accessUrl} from '../../spotify'

function Login() {
  return (
    <LoginContainer>
      <h1>Login Page</h1>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoN-_h9cxRRk5xus-dcEb8PU6KFOpDeZ5NaQ&usqp=CAU" 
        alt=''
      />
      <a href={accessUrl}>Login with spotify</a>
    </LoginContainer>
  )
}

export default Login