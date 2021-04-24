// import React from 'react'
// import { useState } from 'react'
// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'



// const Register = () => {

//   const [inputElement,setInputElement]=useState({
//     firstName:'',
//     lastName:'',
//     email:'',
//     password:'',
//     confirmPassword:''
//   })
//   const setFirstName=(event)=>{
//     setInputElement((prevState)=>{
//       return{
//         firstName:event.target.value,
//         lastName:prevState.lastName,
//         email:prevState.email,
//         password:prevState.password,
//         confirmPassword:prevState.confirmPassword
//       }
//     })
//   }
//   const setLastName=(event)=>{
//     setInputElement((prevState)=>{
//       return{
//         firstName:prevState.firstName,
//         lastName:event.target.value,
//         email:prevState.email,
//         password:prevState.password,
//         confirmPassword:prevState.confirmPassword
//       }
//     })
//   }
//   const setPassword=(event)=>{
//     setInputElement((prevState)=>{
//       return{
//         firstName:prevState.firstName,
//         lastName:prevState.lastName,
//         email:prevState.email,
//         password:event.target.value,
//         confirmPassword:prevState.confirmPassword
//       }
//     })
//   }
//   const setConfirmPassword=(event)=>{
//     setInputElement((prevState)=>{
//       return{
//         firstName:prevState.firstName,
//         lastName:prevState.lastName,
//         email:prevState.email,
//         password:prevState.password,
//         confirmPassword:event.target.value
//       }
//     })
//   }
//   const setEmail=(event)=>{
//     setInputElement((prevState)=>{
//       return{
//         firstName:prevState.firstName,
//         lastName:prevState.lastName,
//         email:event.target.value,
//         password:prevState.password,
//         confirmPassword:prevState.confirmPassword
//       }
//     })
//   }
//   const handleSubmit=async(event)=>{
//      event.preventDefault();
//      const data={
//       email:inputElement.email,
//       password:inputElement.password,
//       confirmPassword:inputElement.confirmPassword,
//       firstName:inputElement.firstName,
//       lastName:inputElement.lastName
//     }
//     const response=await fetch('http://localhost:8000/user/register', {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     })
//     const finalResponse=await response.json();
//     const successMessage=finalResponse.successMessage;
//     const errorMessage=finalResponse.errorMessage;
//     if(successMessage){
//       alert(successMessage);
//     }else if(errorMessage){
//       alert(errorMessage);
//     }
//   }
//   return(
//     <div>
//   <Grid textAlign='center' style={{ height: '100vh',backgroundColor:'#23293e'  }} verticalAlign='middle'>
//     <Grid.Column style={{ maxWidth: 500,backgroundColor:'#E6E6FA' }}>
//       <Header as='h2' color='teal' textAlign='center'>
//         <Image src='https://st2.depositphotos.com/1853861/7028/v/950/depositphotos_70280601-stock-illustration-register-button-icon.jpg' /> Register Here
//       </Header>
//       <Form size='large' onSubmit={handleSubmit}>
//         <Segment stacked>
//         <Form.Input
//           fluid
//           value={inputElement.firstName}
//           onChange={setFirstName}
//           type='text'
//           placeholder='First name'
//           name='firstName'
//           id='form-input-first-name'
//         />
//         <Form.Input
//           value={inputElement.lastName}
//           onChange={setLastName}
//           fluid
//           type='text'
//           name='lastName'
//           placeholder='Last name'
//         />
//         <Form.Input 
//          onChange={setEmail}
//          value={inputElement.email}
//          name='email'
//          type='email'
//          fluid icon='user' 
//          iconPosition='left' 
//          placeholder='E-mail address' 
//         />
//         <Form.Input 
//             onChange={setPassword}
//             fluid
//             value={inputElement.password}
//             name='password'
//             icon='lock'
//             iconPosition='left'
//             placeholder='Password'
//             type='password'
//         />
//         <Form.Input 
//             onChange={setConfirmPassword}
//             value={inputElement.confirmPassword}
//             fluid
//             name='confirmPassword'
//             icon='lock'
//             iconPosition='left'
//             placeholder='Confirm Password'
//             type='password'
//         />

//         <Button type='submit' color='teal' fluid size='large'>
//           Register
//         </Button> 
//         </Segment>  
//       </Form>
//       <Message>
//         <Button href='/Login'color='teal' fluid size='large'>
//           Login
//         </Button>
//       </Message>
//     </Grid.Column>
//   </Grid> 
//   </div>
//   )
  
// }

// export default Register
import React from 'react'
import { useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import * as FaIcons from 'react-icons/fa';



const Register = () => {

  const [inputElement,setInputElement]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const setFirstName=(event)=>{
    setInputElement((prevState)=>{
      return{
        firstName:event.target.value,
        lastName:prevState.lastName,
        email:prevState.email,
        password:prevState.password,
        confirmPassword:prevState.confirmPassword
      }
    })
  }
  const setLastName=(event)=>{
    setInputElement((prevState)=>{
      return{
        firstName:prevState.firstName,
        lastName:event.target.value,
        email:prevState.email,
        password:prevState.password,
        confirmPassword:prevState.confirmPassword
      }
    })
  }
  const setPassword=(event)=>{
    setInputElement((prevState)=>{
      return{
        firstName:prevState.firstName,
        lastName:prevState.lastName,
        email:prevState.email,
        password:event.target.value,
        confirmPassword:prevState.confirmPassword
      }
    })
  }
  const setConfirmPassword=(event)=>{
    setInputElement((prevState)=>{
      return{
        firstName:prevState.firstName,
        lastName:prevState.lastName,
        email:prevState.email,
        password:prevState.password,
        confirmPassword:event.target.value
      }
    })
  }
  const setEmail=(event)=>{
    setInputElement((prevState)=>{
      return{
        firstName:prevState.firstName,
        lastName:prevState.lastName,
        email:event.target.value,
        password:prevState.password,
        confirmPassword:prevState.confirmPassword
      }
    })
  }
  const handleSubmit=async(event)=>{
     event.preventDefault();
     const data={
      email:inputElement.email,
      password:inputElement.password,
      confirmPassword:inputElement.confirmPassword,
      firstName:inputElement.firstName,
      lastName:inputElement.lastName
    }
    const response=await fetch('http://localhost:8000/user/register', {
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
  return(
    <div>
  <Grid textAlign='center' style={{ height: '100vh',backgroundColor:'#23293e'  }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 500,backgroundColor:'#E6E6FA' }}>
      <Header as='h2' color='teal' textAlign='center'>
      <FaIcons.FaSignInAlt></FaIcons.FaSignInAlt>

        <Image  /> Register Here
      </Header>
      <Form size='large' onSubmit={handleSubmit}>
        <Segment stacked>
        <Form.Input
          required
          fluid
          value={inputElement.firstName}
          onChange={setFirstName}
          type='text'
          placeholder='First name'
          name='firstName'
          id='form-input-first-name'
        />
        <Form.Input
          required
          value={inputElement.lastName}
          onChange={setLastName}
          fluid
          type='text'
          name='lastName'
          placeholder='Last name'
        />
        <Form.Input 
         required
         onChange={setEmail}
         value={inputElement.email}
         name='email'
         type='email'
         fluid icon='user' 
         iconPosition='left' 
         placeholder='E-mail address' 
        />
        <Form.Input 
            required
            onChange={setPassword}
            fluid
            value={inputElement.password}
            name='password'
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
        />
        <Form.Input 
           required
            onChange={setConfirmPassword}
            value={inputElement.confirmPassword}
            fluid
            name='confirmPassword'
            icon='lock'
            iconPosition='left'
            placeholder='Confirm Password'
            type='password'
        />

        <Button type='submit' color='teal' fluid size='large'>
          Register
        </Button> 
        </Segment>  
      </Form>
      <Message>
        <Button href='/Login'color='teal' fluid size='large'>
          Login
        </Button>
      </Message>
    </Grid.Column>
  </Grid> 
  </div>
  )
  
}

export default Register