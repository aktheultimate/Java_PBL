// import React, { useState } from 'react'
// import Navbar from '../NavBar'
// import {
//   Button,
//   Input,
//   Form
// } from 'semantic-ui-react'



// const Stationdata=()=>{
   
//   const [inputElement,setInputElement]=useState({
//     stationName:'',
//     code:''
//   });

//   const inputEvent=(event)=>{
//     const name=event.target.name;
//     const value=event.target.value;
//     setInputElement((preState)=>{
//       if(name=='stationName'){
//         return{
//           stationName:value,
//           code:preState.code
//         }
//       }
//       if(name=='code'){
//         return{
//           stationName:preState.stationName,
//           code:value
//         }
//       }
//     })
//   };

//   const handleSubmit=async(event)=>{
//     event.preventDefault();
//     const data={
//       name:inputElement.name,
//       code:inputElement.code
//     }
    
//     const response=await fetch('http://localhost:8000/admin/addStation', {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
        
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Credentials": true,
//         "Access-Control-Allow-Origin":true
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
//     }
//     if(errorMessage){
//       alert(errorMessage);
//     }
//   };

//   return (
//     <div style={{width:'100%',height:'100%'}}>
//     <>
//       <Navbar/>
//     </>
     
//     <Form onSubmit={handleSubmit} style={{backgroundColor:"teal",height:'100%',marginLeft:'10em',marginRight:'10em',marginTop:'15%'}}>
//       <Input 
//         type='string' 
//         name='stationName'
//         onChange={inputEvent}
//         style={{marginLeft:'9%',width:'500px',marginRight:'1%',marginTop:'5%'}} 
//         placeholder='StationName' 
//         value={inputElement.name}
//       />
//       <Input 
//         type='number' 
//         name='code'
//         onChange={inputEvent}
//         value={inputElement.code} 
//         style={{marginRight:'0px',width:'500px'}} 
//         placeholder='Station Code' 
//       />
//       <Button 
//         type="Submit" 
//         primary 
//         style={{marginLeft:'38%',width:'250px',marginTop:"13px",marginBottom:"9px"}}
//         inverted  
//       >
//         Submit
//       </Button>
//     </Form>
  
//     </div>
    
//   )
// }
// export default Stationdata;
import React, { useState } from 'react'
import Navbar from '../NavBar'
import {
  Button,
  Input,
  Form,Segment
} from 'semantic-ui-react'



const Stationdata=()=>{
   
  const [inputElement,setInputElement]=useState({
    stationName:'',
    code:''
  });

  const inputEvent=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setInputElement((preState)=>{
      if(name==='stationName'){
        return{
          stationName:value,
          code:preState.code
        }
      }
      if(name==='code'){
        return{
          stationName:preState.stationName,
          code:value
        }
      }
    })
  };

  const handleSubmit=async(event)=>{
    event.preventDefault();
    const data={
      name:inputElement.stationName,
      code:inputElement.code
    }
    
    const response=await fetch('http://localhost:8000/admin/addStation', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      headers: {
        
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin":true
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
    }
    if(errorMessage){
      alert(errorMessage);
    }
  };

  return (
    <div style={{width:'100%',height:'100%'}}>
    <>
      <Navbar/>
    </>
    <header style={{backgroundImage:`url(${"https://images.unsplash.com/photo-1617653695386-1d78957d33f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"})`,height:'1000px',backgroundSize:'cover',padding:'30px'}}>
    <Segment inverted style={{marginLeft:'20%',marginRight:'20%',marginTop:'0px'}} >

    <Form onSubmit={handleSubmit} >
      <Input style={{marginLeft:'25%',width:'500px',marginTop:'0px'}}
        type='string' 
        name='stationName'
        onChange={inputEvent}
        placeholder='StationName' 
        value={inputElement.name}
      />
      <Input style={{marginLeft:'25%',width:'500px',marginTop:'20px'}}
        type='number' 
        name='code'
        onChange={inputEvent}
        value={inputElement.code} 
        placeholder='Station Code' 
      />
      <Button 
        type="Submit" 
        primary 
        style={{marginLeft:'38%',width:'250px',marginTop:"13px",marginBottom:"9px"}}
        inverted  
      >
        Submit
      </Button>
    </Form>
    </Segment>
  </header>
    </div>
    
  )
}
export default Stationdata;
