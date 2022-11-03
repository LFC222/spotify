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
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
        alt=''
      />
      <a href={accessUrl}>Login with spotify</a>
    </LoginContainer>
  )
}

export default Login