import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <Typography variant='h3'>Signup Page</Typography>
        <br></br>
      <TextField label='First name' variant='outlined'/>
      <br></br>
      <br></br>
      <TextField label='Last name' variant='outlined'/>
      <br></br>
      <br></br>
      <TextField label='Email' variant='outlined'/>
      <br></br>
      <br></br>
      <TextField label='password' type={'password'} variant='outlined'/>
      <br></br>
      <br></br>
      <Button type='contained' color='success'>Signup</Button>
    </div>
  )
}

export default Signup
