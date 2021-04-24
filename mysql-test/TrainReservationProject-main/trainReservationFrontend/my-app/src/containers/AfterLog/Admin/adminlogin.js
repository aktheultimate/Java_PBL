import React, { useState } from 'react'
import { Button, Form,Container,Grid, Header, Image, Message, Segment,Divider,Icon } from 'semantic-ui-react'
// import Main from '../Home';
import Navbar from '../NavBar'
import Main from '../Page/Main';

const Register = () => {
  const isAdminLoggedIn=localStorage.getItem('adminToken');
  // const [isLoggedIn,setIsloggedIn]=useState(false)
  const [inputElement,setInputElement]=useState({
    firstName:'',
    middleName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
  });

  const [inputLoginElement,setLoginInputElement]=useState({
    email:'',
    password:''
  });

  const inputLoginEvent=async(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setLoginInputElement((preState)=>{
      if(name=='email'){
        return{
          email:value,
          password:preState.password
        };
      }
      if(name=='password'){
        return{
          email:preState.email,
          password:value
        };
      }
    })
  };

  const handleLoginSubmit=async(event)=>{
    event.preventDefault();
    const data={
      password:inputLoginElement.password,
      email:inputLoginElement.email
    }
    const response=await fetch('http://localhost:8000/admin/auth/login', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    const finalResponse=await response.json();
    if(finalResponse.token){
      localStorage.setItem('adminToken',finalResponse.token);
      window.location.href='./admin-login'
    }
    // const successMessage=finalResponse.successMessage;
    const errorMessage=finalResponse.errorMessage;
    // if(successMessage){
    //   alert(successMessage);
    if(errorMessage){
      alert(errorMessage);
    }
  }

  const handleRegisterSubmit=async(event)=>{
    event.preventDefault();
    const data={
      firstName:inputElement.firstName,
      midName:inputElement.middleName,
      lastName:inputElement.lastName,
      email:inputElement.email,
      password:inputElement.password,
      confirmPassword:inputElement.confirmPassword
    }
    const response=await fetch('http://localhost:8000/admin/auth/register', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
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
  
  const inputEvent=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setInputElement((preState)=>{
      if(name=='firstName'){
        return{
          firstName:value,
          middleName:preState.middleName,
          lastName:preState.lastName,
          email:preState.email,
          password:preState.password,
          confirmPassword:preState.confirmPassword,
        };
      }
      if(name=='middleName'){
        return{
          firstName:preState.firstName,
          middleName:value,
          lastName:preState.lastName,
          email:preState.email,
          password:preState.password,
          confirmPassword:preState.confirmPassword,
        };
      }
      if(name=='lastName'){
        return{
          firstName:preState.firstName,
          middleName:preState.middleName,
          lastName:value,
          email:preState.email,
          password:preState.password,
          confirmPassword:preState.confirmPassword,
        };
      }
      if(name=='email'){
        return{
          firstName:preState.firstName,
          middleName:preState.middleName,
          lastName:preState.lastName,
          email:value,
          password:preState.password,
          confirmPassword:preState.confirmPassword,
        };
      }
      if(name=='password'){
        return{
          firstName:preState.firstName,
          middleName:preState.middleName,
          lastName:preState.lastName,
          email:preState.email,
          password:value,
          confirmPassword:preState.confirmPassword,
        };
      }
      if(name=='confirmPassword'){
        return{
          firstName:preState.firstName,
          middleName:preState.middleName,
          lastName:preState.lastName,
          email:preState.email,
          password:preState.password,
          confirmPassword:value,
        };
      }
    })   
  }
  return(
    <div>
    {
    !(isAdminLoggedIn) && <>
      <>
         <Navbar/>
      </>
      <Header
          as='h1'
          inverted
          style={{
              width: 2024,
              height: 800,
              backgroundImage: `url(${"https://www.ardigitalmedia.in/wp-content/uploads/Role-of-Digital-Marketing-in-Travel-Tourism-Industry.jpg"})`,
              backgroundSize: 'contain',
              fontSize: '4em',
              fontWeight: 'normal',
              margin: 0,
              display: 'inline-block',
          }}
      >
      </Header>
  
       <Grid style={{marginTop:'1rem'}}>
       <Grid  textAlign='center' style={{width:'50%',height: '100vh',backgroundColor:'white',paddingLeft:'100px' }} verticalAlign='middle'>
       <Grid.Column floated='left'style={{ marginTop:'15px',maxWidth:500,backgroundColor:'#E6E6FA'}}>
        <Header as='h2' color='black' textAlign='center' >
          <Image src='https://st2.depositphotos.com/1853861/7028/v/950/depositphotos_70280601-stock-illustration-register-button-icon.jpg' /> Register Here
        </Header>
        <Form size='large' onSubmit={handleRegisterSubmit}>
          <Segment stacked>
          <Form.Input
            required
            fluid
            onChange={inputEvent}
            value={inputElement.firstName}
            placeholder='First name'
            name='firstName'
            // id='form-input-first-name'
          />
          <Form.Input
            required
            fluid
            onChange={inputEvent}
            value={inputElement.middleName}
            placeholder='Middle name'
            name='middleName'
          />
          <Form.Input
            required
            fluid
            onChange={inputEvent}
            value={inputElement.lastName}
            placeholder='Last name'
            name='lastName'
          />
          <Form.Input 
          required
          onChange={inputEvent}
          fluid 
          type="email"
          value={inputElement.email}
          icon='user' 
          iconPosition='left' 
          placeholder='E-mail address'
          name='email'
          />
          <Form.Input 
              onChange={inputEvent}
              required
              value={inputElement.password}
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name='password'
          />
          <Form.Input
              required 
              onChange={inputEvent}
              value={inputElement.confirmPassword}
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirm Password'
              type='password'
              name='confirmPassword'
          />
          <Button color='black' fluid size='large' type='submit'>
              Register
          </Button> 
          </Segment>  
        </Form>
       
      </Grid.Column>
      </Grid> 
      <Grid textAlign='right' style={{width:'50%', height: '100vh',backgroundColor:'white',paddingRight:'50px'}} verticalAlign='middle'>
      <Grid.Column floated='right'style={{ maxWidth: 500,backgroundColor:'#E6E6FA' }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image  src='https://tse4.mm.bing.net/th?id=OIP.VcHIunMF4sg3nmrTBNd82gHaHa&pid=Api&P=0&w=300&h=300' /> Log-in to your account
        </Header>
        <Form size='large' onSubmit={handleLoginSubmit}>
          <Segment stacked>
            <Form.Input 
              type="email"
              required
              onChange={inputLoginEvent}
              value={inputLoginElement.email}
              fluid icon='user' 
              iconPosition='left' 
              placeholder='E-mail address' 
              name='email'
            />
            <Form.Input
              required
              onChange={inputLoginEvent}
              value={inputLoginElement.password} 
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name='password'
            />
  
            <Button type='submit' color='black' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
      
          <Message>
            <Button  href='/forgot-password' color='black'fluid  size='large' >
              Forgot Password
            </Button>
          </Message>
            
          <Button floated='right'size='large'   color='facebook'>
            <Icon name='facebook' /> Facebook
          </Button> 
          <Button floated='left' size='large'color='google plus'style={{}}>
            <Icon name='google plus' /> Google Plus
          </Button>
      
  
      </Grid.Column>
      </Grid>
      <Divider
            as='h4'
            className='header'
            vertical
            style={{ margin: '60em 0em', textTransform: 'uppercase' }}
      >
        <a href='#'>OR</a>
      </Divider>
    </Grid>
    </>}
    {(isAdminLoggedIn) &&
    
    <Main></Main>
    }
    </div>
  )
}
export default Register