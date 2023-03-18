import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <Typography variant='h3'>Welcome To Typhoon</Typography>
      <TextField label='Email' variant='standard'/>
      <br></br>
      <TextField label='Password' type={'password'} variant='standard'/>
      <br></br>
      <br></br>
      <Button variant='contained' color='success'>Login</Button>
    </div>
  )
}

export default Login
