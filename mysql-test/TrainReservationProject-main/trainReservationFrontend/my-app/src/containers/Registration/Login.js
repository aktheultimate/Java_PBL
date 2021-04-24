// import { Button, Form, Grid, Header, Image, Message, Segment,Icon } from 'semantic-ui-react'
// import Navbar from '../AfterLog/NavBar'
// import React ,{ Component } from 'react'

// export default class Login extends Component {
  
//   constructor(props){
//     super(props);
//     this.state={
//         email:'',
//         password:''
//     }
//   }
//   emailChange=(event)=>{
//     const value=event.target.value;
//     this.setState({
//       email:value
//     })
   
//   }
//   passwordChange=(event)=>{
//     const value=event.target.value;
//     this.setState({
//       password:value
//     })
   
//   }

//   handleUserLogin=async()=>{
//     const data={
//       email:this.state.email,
//       password:this.state.password
//     }
//     const response=await fetch('http://localhost:8000/user/login/manual', {
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
//     // const successMessage=finalResponse.successMessage;
//     if(finalResponse.token){
//       localStorage.setItem('userToken',finalResponse.token);
//       window.location.href='./afterbook'
//     }
//     const errorMessage=finalResponse.errorMessage;
//     // 
//     if(errorMessage){
//       alert(errorMessage);
//     }
//   }
  
//   render() {
    

//     return (
//       <div>
//       <Header as='h1' textAlign='center' color='red' style={{ height: '20vh',paddingTop:'50px',backgroundColor:'#A9A9A9',fontSize:'xxx-large',fontStyle:'italic',fontWeight:'5000' }}>EZEE Reservation System</Header>
//       <Grid textAlign='center' style={{ height: '100vh',backgroundColor:'#23293e'  }} verticalAlign='middle'>
//       <Grid.Column style={{ maxWidth: 500,backgroundColor:'#E6E6FA' }}>
//       <Header as='h2' color='teal' textAlign='center'>
//       <Image src='https://tse1.mm.bing.net/th?id=OIP.NhDRuxMBIwTC-KTWu1pIDQHaHa&pid=Api&P=0&w=300&h=300' /> Log-in to your account
//       </Header>
//       <Form size='large' onSubmit={this.handleUserLogin}>
//       <Segment stacked>
//         <Form.Input  
//             fluid icon='user' 
//             iconPosition='left' 
//             placeholder='E-mail address'   
//             name='email'
//             value={this.state.email}
//             onChange={this.emailChange}  
//           />
//         <Form.Input 
//           fluid
//           value={this.state.password}
//           onChange={this.passwordChange}
//           name='password'
//           icon='lock'
//           iconPosition='left'
//           placeholder='Password'
//           type='password'
//         />

//         <Button type='submit' color='teal' fluid size='large'>
//           Login
//         </Button>
//       </Segment>
//       </Form>
//       <Message>
//         <Button href='/Register' color='teal' fluid size='large'>
//           Register
//         </Button>
//       </Message>
// {/* <Message><Button  href='/forgot-password' color='teal'fluid  size='large' >
//           Forgot Password
//         </Button>
//         </Message> */}
        
//         <Button floated='right'size='large'   color='facebook'>
//     <Icon name='facebook' /> Facebook
//   </Button> 
//   <Button floated='left' size='large'color='google plus'style={{}}>
//     <Icon name='google plus' /> Google Plus
//   </Button>
  

//   </Grid.Column>
// </Grid> 

// </div>
//     )
//   }
// }
import { Button, Form, Grid, Header, Image, Message, Segment,Icon } from 'semantic-ui-react'
import Navbar from '../AfterLog/NavBar'
import React ,{ Component } from 'react'
import * as FaIcons from 'react-icons/fa';

export default class Login extends Component {
  
  constructor(props){
    super(props);
    this.state={
        email:'',
        password:''
    }
  }
  emailChange=(event)=>{
    const value=event.target.value;
    this.setState({
      email:value
    })
   
  }
  passwordChange=(event)=>{
    const value=event.target.value;
    this.setState({
      password:value
    })
   
  }

  handleUserLogin=async()=>{
    const data={
      email:this.state.email,
      password:this.state.password
    }
    const response=await fetch('http://localhost:8000/user/login/manual', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json' ,
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin":true// 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    const finalResponse=await response.json();
    // const successMessage=finalResponse.successMessage;
    if(finalResponse.token){
      localStorage.setItem('userToken',finalResponse.token);
      window.location.href='./home'
    }
    const errorMessage=finalResponse.errorMessage;
    // 
    if(errorMessage){
      alert(errorMessage);
    }
  }
  
  render() {
    

    return (
      <div>
      <Header as='h1' textAlign='center' color='#FFFFFF' style={{ height: '20vh',paddingTop:'50px',backgroundColor:'black',fontSize:'xxx-large',fontStyle:'italic',fontWeight:'5000' }}> Reservation System</Header>
      <Grid textAlign='center' style={{ height: '65vh',backgroundColor:'#FFD700'  }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 500,backgroundColor:'#E6E6FA' }}>
      <Header as='h2' color='teal' textAlign='center'>
        <FaIcons.FaSignInAlt></FaIcons.FaSignInAlt>
      <Image  /> Log-in to your account
      </Header>
      <Form size='large' onSubmit={this.handleUserLogin}>
      <Segment stacked>
        <Form.Input 
            type="email"
            required 
            fluid icon='user' 
            iconPosition='left' 
            placeholder='E-mail address'   
            name='email'
            value={this.state.email}
            onChange={this.emailChange}  
          />
        <Form.Input 
          fluid
          required
          type="password"
          value={this.state.password}
          onChange={this.passwordChange}
          name='password'
          icon='lock'
          iconPosition='left'
          placeholder='Password'
          type='password'
        />

        <Button type='submit' color='teal' fluid size='large'>
          Login
        </Button>
      </Segment>
      </Form>
      <Message>
        <Button href='/Register' color='teal' fluid size='large'>
          Register
        </Button>
      </Message>
{/* <Message><Button  href='/forgot-password' color='teal'fluid  size='large' >
          Forgot Password
        </Button>
        </Message> */}
        
        <Button floated='right'size='large'   color='facebook'>
    <Icon name='facebook' /> Facebook
  </Button> 
  <Button floated='left' size='large'color='google plus'style={{}}>
    <Icon name='google plus' /> Google Plus
  </Button>
  

  </Grid.Column>
</Grid> 

</div>
    )
  }
}
