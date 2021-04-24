import { event } from 'jquery';
import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


const ForgotPass = () => {

  const [email,setEmail]=useState('');

  const handleSubmit=async(event)=>{

    event.preventDefault();
    const data={
      email:email
    }
    // console.log(data);
    const response=await fetch('http://localhost:8000/admin/auth/forgotPassword', {
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
    const successMessage=finalResponse.successMessage;
    const errorMessage=finalResponse.errorMessage;
    if(successMessage){
      alert(successMessage);
    }else if(errorMessage){
      alert(errorMessage);
    }
  }
  return(
  <div>
  <Grid textAlign='center' style={{ height: '100vh',backgroundColor:'#23293e'  }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 500,backgroundColor:'#E6E6FA' }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='https://media.gettyimages.com/vectors/alert-glossy-icon-vector-id1207320537?s=2048x2048' /> Revive Password
      </Header>
      <Form size='large' onSubmit={handleSubmit}>
        <Segment stacked>

          <Form.Input 
            onChange={(event)=>setEmail(event.target.value)}
            value={email}
            fluid icon='user' 
            iconPosition='left' 
            placeholder='E-mail address' 
          />
          

          <Button type='submit' color='teal' fluid size='large'>
            Send OTP/Password
          </Button> 

        </Segment>  
      </Form>
      {/* <Message>
        <Button href='/admin' color='teal' fluid size='large'>
          Login
        </Button>
      </Message> */}
    </Grid.Column>
  </Grid> 
  </div>
  );
}

export default ForgotPass ;