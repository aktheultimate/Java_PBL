import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
const ForgotPass = () => {

    const [inputElement,setInputElement]=useState({
        oldPassword:'',
        password:'',
        confirmPassword:'',
        email:''
    })

    const handleSubmit=async(event)=>{
        event.preventDefault();
        const data={
            email:inputElement.email,
            oldPassword:inputElement.oldPassword,
            newPassword:inputElement.password,
            confirmNewPassword:inputElement.confirmPassword
        }
        // console.log(data)
        // console.log('hello')
    const response=await fetch('http://localhost:8000/admin/auth/updatePassword', {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    const finalResponse=await response.json();
    const errorMessage=finalResponse.errorMessage;
    const successMessage=finalResponse.successMessage;
    if(errorMessage){
        alert(errorMessage)
    }
    if(successMessage){
        alert(successMessage)
    }
    }
    const inputEvent=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        if(name=='password'){
            setInputElement((prevState)=>{
                return{
                  password:value,
                  confirmPassword:prevState.confirmPassword,
                  oldPassword:prevState.oldPassword,
                  email:prevState.email
                }
            })
        }
        if(name=='confirmPassword'){
            setInputElement((prevState)=>{
                return{
                  password:prevState.password,
                  confirmPassword:value,
                  oldPassword:prevState.oldPassword,
                  email:prevState.email
                }
            })
        }
        if(name=='oldPassword'){
            setInputElement((prevState)=>{
                return{
                  password:prevState.password,
                  confirmPassword:prevState.confirmPassword,
                  oldPassword:value,
                  email:prevState.email
                }
            })
        }
        if(name=='email'){
            setInputElement((prevState)=>{
                return{
                  password:prevState.password,
                  confirmPassword:prevState.confirmPassword,
                  oldPassword:prevState.oldPassword,
                  email:value
                }
            })
        }
    }
    return(

        <div>
  <Grid textAlign='center' style={{ height: '100vh',backgroundColor:'#23293e'  }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 500,backgroundColor:'#E6E6FA' }}>
      <Header as='h2' color='teal' textAlign='center'>
      <FaIcons.FaKey></FaIcons.FaKey>
        <Image src='' />  Password
      </Header>
      <Form size='large' onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input 
          value={inputElement.oldPassword}
          type='text'
          onChange={inputEvent}
          name='oldPassword'
          fluid icon='user' 
          iconPosition='left' 
          placeholder='Enter OTP' />
          <Form.Input 
          value={inputElement.email}
          onChange={inputEvent}
          type='email'
          name='email'
          fluid icon='user' 
          iconPosition='left' 
          placeholder='Email' />
          <Form.Input
          value={inputElement.password} 
          type="password"
          onChange={inputEvent}
          name='password'
          fluid icon='lock' 
          iconPosition='left' 
          placeholder='Enter New Password' />
          <Form.Input 
           type="password"
          name='confirmPassword'
          onChange={inputEvent}
          value={inputElement.confirmPassword}
          fluid icon='lock' 
          iconPosition='left' 
          placeholder='Confirm Password' />


          
        </Segment>  
      
      <Message>
         <Button type='submit' color='teal' fluid size='large'>
            Change Password
          </Button>
      </Message>
      </Form>
    </Grid.Column>
  </Grid> 
  </div>
    )  
}

export default ForgotPass ;