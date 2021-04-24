
 

import React,{Component, useState} from 'react';
import Navbar from '../NavBar'
import { Container, Row, Col, ButtonGroup } from 'reactstrap';
import {
  Button,
  Segment,
  Input,
  Form
} from 'semantic-ui-react'




const Traindata=()=>{

  const [inputFields,setInputFields]=useState({
    name:'',
    number:'',
    fromStation:'',
    toStation:'',
    fDeptTime:'',
    fDeptDate:'',
    tArrTime:'',
    tArrDate:'',
    genCoachFair:'',
    acCoachFair:'',
    sleepCoachFair:''
  })
  const [midStations,setMidStations]=useState([{
    endStationName:'',
    arrTime:'',
    arrDate:'',
    deptTime:'',
    deptDate:'',
    acCoachFair:'',
    genCoachFair:'',
    sleepCoachFair:''
  }])

  const [add,setAdd]=useState({
    addMidStation:false
  })

  const [countValues,setCountValues]=useState({
    genCoachCount:'',
    sleepCoachCount:'',
    acCoachCount:''
  })
  const handleChangeInput=(event,index)=>{
    // console.log(event)
    event.preventDefault();
    const values=[...midStations];
    values[index][event.target.name]=event.target.value;
    // console.log(values)
    setMidStations(values);
  }
  const handleInputEvent=(e)=>{
    e.preventDefault();
    const name=e.target.name;
    const value=e.target.value;
    if(name==='name'){
      setInputFields((prevState)=>{
      return{
        
        name:value,
        number:prevState.number,
        fromStation:prevState.fromStation,
        toStation:prevState.toStation,
        fDeptTime:prevState.fDeptTime,
        fDeptDate:prevState.fDeptDate,
        tArrTime:prevState.tArrTime,
        tArrDate:prevState.tArrDate,
        genCoachFair:prevState.genCoachFair,
        acCoachFair:prevState.acCoachFair,
        sleepCoachFair:prevState.sleepCoachFair
        
      }})
    }
    if(name==='number'){
      setInputFields((prevState)=>{
      return{
        
        name:prevState.name,
        number:value,
        fromStation:prevState.fromStation,
        toStation:prevState.toStation,
        fDeptTime:prevState.fDeptTime,
        fDeptDate:prevState.fDeptDate,
        tArrTime:prevState.tArrTime,
        tArrDate:prevState.tArrDate,
        genCoachFair:prevState.genCoachFair,
        acCoachFair:prevState.acCoachFair,
        sleepCoachFair:prevState.sleepCoachFair
        
      }})
    }
    if(name==='fromStation'){
      setInputFields((prevState)=>{
      return{
        
        name:prevState.name,
        number:prevState.number,
        fromStation:value,
        toStation:prevState.toStation,
        fDeptTime:prevState.fDeptTime,
        fDeptDate:prevState.fDeptDate,
        tArrTime:prevState.tArrTime,
        tArrDate:prevState.tArrDate,
        genCoachFair:prevState.genCoachFair,
        acCoachFair:prevState.acCoachFair,
        sleepCoachFair:prevState.sleepCoachFair
        
      }})
    }
    if(name==='toStation'){
      setInputFields((prevState)=>{
      return{
        
        name:prevState.name,
        number:prevState.number,
        fromStation:prevState.fromStation,
        toStation:value,
        fDeptTime:prevState.fDeptTime,
        fDeptDate:prevState.fDeptDate,
        tArrTime:prevState.tArrTime,
        tArrDate:prevState.tArrDate,
        genCoachFair:prevState.genCoachFair,
        acCoachFair:prevState.acCoachFair,
        sleepCoachFair:prevState.sleepCoachFair
        
      }})
    }
    if(name==='fDeptTime'){
      setInputFields((prevState)=>{
      return{
        
        name:prevState.name,
        number:prevState.number,
        fromStation:prevState.fromStation,
        toStation:prevState.toStation,
        fDeptTime:value,
        fDeptDate:prevState.fDeptDate,
        tArrTime:prevState.tArrTime,
        tArrDate:prevState.tArrDate,
        genCoachFair:prevState.genCoachFair,
        acCoachFair:prevState.acCoachFair,
        sleepCoachFair:prevState.sleepCoachFair
        
      }})
    }
    if(name==='fDeptDate'){
      setInputFields((prevState)=>{
      return{
        
        name:prevState.name,
        number:prevState.number,
        fromStation:prevState.fromStation,
        toStation:prevState.toStation,
        fDeptTime:prevState.fDeptTime,
        fDeptDate:value,
        tArrTime:prevState.tArrTime,
        tArrDate:prevState.tArrDate,
        genCoachFair:prevState.genCoachFair,
        acCoachFair:prevState.acCoachFair,
        sleepCoachFair:prevState.sleepCoachFair
        
      }})
    }
    if(name==='tArrTime'){
      setInputFields((prevState)=>{
      return{
        
        name:prevState.name,
        number:prevState.number,
        fromStation:prevState.fromStation,
        toStation:prevState.toStation,
        fDeptTime:prevState.fDeptTime,
        fDeptDate:prevState.fDeptDate,
        tArrTime:value,
        tArrDate:prevState.tArrDate,
        genCoachFair:prevState.genCoachFair,
        acCoachFair:prevState.acCoachFair,
        sleepCoachFair:prevState.sleepCoachFair
        
      }})
    }
    if(name==='tArrDate'){
      setInputFields((prevState)=>{
      return{
        
        name:prevState.name,
        number:prevState.number,
        fromStation:prevState.fromStation,
        toStation:prevState.toStation,
        fDeptTime:prevState.fDeptTime,
        fDeptDate:prevState.fDeptDate,
        tArrTime:prevState.tArrTime,
        tArrDate:value,
        genCoachFair:prevState.genCoachFair,
        acCoachFair:prevState.acCoachFair,
        sleepCoachFair:prevState.sleepCoachFair
        
      }})
    }
    if(name==='genCoachFair'){
      setInputFields((prevState)=>{
      return{
        
        name:prevState.name,
        number:prevState.number,
        fromStation:prevState.fromStation,
        toStation:prevState.toStation,
        fDeptTime:prevState.fDeptTime,
        fDeptDate:prevState.fDeptDate,
        tArrTime:prevState.tArrTime,
        tArrDate:prevState.tArrDate,
        genCoachFair:value,
        acCoachFair:prevState.acCoachFair,
        sleepCoachFair:prevState.sleepCoachFair
        
      }})
    }
    if(name==='sleepCoachFair'){
      setInputFields((prevState)=>{
      return{
        
        name:prevState.name,
        number:prevState.number,
        fromStation:prevState.fromStation,
        toStation:prevState.toStation,
        fDeptTime:prevState.fDeptTime,
        fDeptDate:prevState.fDeptDate,
        tArrTime:prevState.tArrTime,
        tArrDate:prevState.tArrDate,
        genCoachFair:prevState.genCoachFair,
        acCoachFair:prevState.acCoachFair,
        sleepCoachFair:value
        
      }})
    }
    if(name==='acCoachFair'){
      setInputFields((prevState)=>{
      return{
        
        name:prevState.name,
        number:prevState.number,
        fromStation:prevState.fromStation,
        toStation:prevState.toStation,
        fDeptTime:prevState.fDeptTime,
        fDeptDate:prevState.fDeptDate,
        tArrTime:prevState.tArrTime,
        tArrDate:prevState.tArrDate,
        genCoachFair:prevState.genCoachFair,
        acCoachFair:value,
        sleepCoachFair:prevState.sleepCoachFair
        
      }})
    }
  }
  const handleAddMore=(e)=>{
    e.preventDefault();
    // console.log(midStations)
    setMidStations([...midStations,{
      endStationName:'',
      arrTime:'',
      arrDate:'',
      deptTime:'',
      deptDate:'',
      acCoachFair:'',
      genCoachFair:'',
      sleepCoachFair:''
    }])
  }
  const handleRemove=(index)=>{
    const values=[...midStations];
    values.splice(index, 1);
    setMidStations(values);

  }
  const handleAddMidStations=(e)=>{
    e.preventDefault();
    if(add.addMidStation===false){
      setAdd({
        addMidStation:true
      })
    }
    else{
      setAdd({
        addMidStation:false
      })
    }
    if(midStations.length===0){
      setMidStations([{
        endStationName:'',
        arrTime:'',
        arrDate:'',
        deptTime:'',
        deptDate:'',
        acCoachFair:'',
        genCoachFair:'',
        sleepCoachFair:''
      }])
    }
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    // const genCoachCount=document.getElementsByName("genCoachCount").value;
    // const sleepCoachCount=document.getElementsByName("sleepCoachCount").value;
    // const acCoachCount=document.getElementsByName("acCoachCount").value;
    const finalMidStations=[...midStations,{
      endStationName:inputFields.toStation,
      acCoachFair:inputFields.acCoachFair,
      genCoachFair:inputFields.genCoachFair,
      sleepCoachFair:inputFields.sleepCoachFair,
      arrTime:inputFields.tArrTime,
      arrDate:inputFields.tArrDate,
      deptTime:inputFields.tArrTime,
      deptDate:inputFields.tArrDate
    }]
    const data={
     
      name:inputFields.name,
      number:inputFields.number,
      fromStation:inputFields.fromStation,
      toStation:inputFields.toStation,
      fDeptTime:inputFields.fDeptTime,
      fDeptDate:inputFields.fDeptDate,
      tArrTime:inputFields.tArrTime,
      tArrDate:inputFields.tArrDate,
      genCoachFair:inputFields.genCoachFair,
      acCoachFair:inputFields.acCoachFair,
      sleepCoachFair:inputFields.sleepCoachFair,
      midStations:finalMidStations,
      genCoachCount:countValues.genCoachCount,
      acCoachCount:countValues.acCoachCount,
      sleepCoachCount:countValues.sleepCoachCount

    }
    console.log(data)
    const response=await fetch('http://localhost:8000/admin/addRail', {
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
    const successMessage=finalResponse.successMessage;
    const errorMessage=finalResponse.errorMessage;
    if(successMessage){
      alert(successMessage);
    }else if(errorMessage){
      alert(errorMessage);
    }
    // console.log(data);
  }
  const handleSelect=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    if(name==='genCoachCount'){
      setCountValues((prevState)=>{
        return{
          genCoachCount:value,
          sleepCoachCount:prevState.sleepCoachCount,
          acCoachCount:prevState.acCoachCount
        }
      })
    }
    if(name=='sleepCoachCount'){
      setCountValues((prevState)=>{
        return{
          genCoachCount:prevState.genCoachCount,
          sleepCoachCount:value,
          acCoachCount:prevState.acCoachCount
        }
      })
    }
    if(name=='acCoachCount'){
      setCountValues((prevState)=>{
        return{
          genCoachCount:prevState.genCoachCount,
          sleepCoachCount:prevState.sleepCoachCount,
          acCoachCount:value
        }
      })
    }
  }

  return (

 <div >
         <Navbar/>
    <div  style={{margin:'0px',backgroundImage:`url(${"https://images.unsplash.com/photo-1617653695386-1d78957d33f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"})`,height:'1500px',maxWidth:'100%',backgroundSize:'cover',padding:'30px'}} >
      <Segment inverted style={{marginLeft:'10%',marginRight:'10%',marginTop:'5%',borderRadius:'20px',width:'75%',backgroundColor:''}} >
      
      <Form onSubmit={handleSubmit}>
      <Container>
      <Row>
        <Col>
        <Input 
          placeholder="Train Name"
          name='name'
          onChange={handleInputEvent}
          value={inputFields.name}
          type="text" 
          style={{marginLeft:'47%',marginTop:'2em'}}
          inverted 
        />
        </Col>
        <Col>
        <Input 
          placeholder="Train Number"
          name='number'
          onChange={handleInputEvent}
          value={inputFields.number}
          type="number" 
          style={{marginLeft:'12%',marginTop:'2em'}}
          inverted 
        />
        </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Input 
              name='fromStation'
              value={inputFields.fromStation}
              placeholder="Source Station"
              onChange={handleInputEvent}
              type="text" 
              style={{marginLeft:'16.7%',width:'200px',marginTop:'10px'}}
              inverted 
            />
          </Col>
          <Col>
            <Input 
              name='fDeptTime'
              value={inputFields.fDeptTime}
              placeholder="Departure Time"
              onChange={handleInputEvent}
              type="time" 
              style={{marginLeft:'16.7%',width:'200px',marginTop:'10px'}}
              inverted 
            />
          </Col>
          <Col>
            <Input 
              name='fDeptDate'
              value={inputFields.fDeptDate}
              onChange={handleInputEvent}
              placeholder="Departure Date"
              type="date" 
              style={{marginLeft:'16.7%',width:'200px',marginTop:'10px'}}
              inverted 
            />
          </Col>
        </Row>
        <Row>
         <Col>
            <Input 
              name='toStation'
              value={inputFields.toStation}
              onChange={handleInputEvent}
              placeholder="Destination Station"
              type="text" 
              style={{marginLeft:'16.7%',width:'200px',marginTop:'10px'}}
              inverted 
            />
           </Col>
           <Col>
            <Input 
              name='tArrTime'
              value={inputFields.tArrTime}
              onChange={handleInputEvent}
              placeholder="Arrival Time"
              type="time" 
              style={{marginLeft:'16.7%',width:'200px',marginTop:'10px'}}
              inverted 
            />
           </Col>
           <Col>
            <Input 
              placeholder="Arrival Date"
              name='tArrDate'
              value={inputFields.tArrDate}
              onChange={handleInputEvent}
              type="date" 
              style={{marginLeft:'16.7%',width:'200px',marginTop:'10px'}}
              inverted 
            />
           </Col>
        </Row>
      </Container>
      <Container>
          <Row>
            <Col>
            <select 
            name="genCoachCount" 
            className="browser-default custom-select" 
            style={{marginLeft:'16.7%',width:'200px',marginTop:'10px'}}
            onChange={handleSelect}
            >
              <option value='0'>No of Genral Blocks</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            </Col>
            <Col>
            <select onChange={handleSelect} name="sleepCoachCount" className="browser-default custom-select"style={{marginLeft:'16.7%',width:'200px',marginTop:'10px'}} >
              <option value='0'>No of Sleeper Blocks</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            </Col>
            <Col>
            <select onChange={handleSelect} name="acCoachCount" className="browser-default custom-select" style={{marginLeft:'16.7%',width:'200px',marginTop:'10px'}} >
              <option value='0'>No of Ac Blocks</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            </Col>
            
          </Row>
          <Row>
            <Col>
            <Input
              style={{marginLeft:'16.7%',width:'200px',marginTop:'10px'}}
              name='genCoachFair'
              value={inputFields.genCoachFair}
              onChange={handleInputEvent}
              type="number" 
              inverted 
              placeholder='Genral Coach Fair'
            />
            </Col>
            <Col>
            <Input
              style={{marginLeft:'16.7%',width:'200px',marginTop:'10px'}}
              name='sleepCoachFair'
              onChange={handleInputEvent}
              value={inputFields.sleepCoachFair}
              type="number" 
              inverted 
              placeholder='Sleep Coach Fair'
            />
            </Col>
            <Col>
            <Input
              style={{marginLeft:'16.7%',width:'200px',marginTop:'10px'}}
              name='acCoachFair'
              onChange={handleInputEvent}
              value={inputFields.acCoachFair}
              type="number" 
              inverted
              placeholder='Ac Coach Fair'
            />
            </Col>
          </Row>
        </Container>
        <Container>

            <Col style={{width:'100%',marginRight:'0%'}}><Button onClick={handleAddMidStations} primary style={{marginLeft:'79.5%',width:'15%',marginRight:'0%'}}>Add Midstations</Button></Col>
            {/* <Col style={{width:'1%',marginLeft:'60%'}}><Button primary style={{marginLeft:'5%'}}>Submit</Button></Col> */}
         
          
        </Container>
        {add.addMidStation && midStations.map((midStation,index)=>(
          <div key={index}>
          <Container>
            <Row>
              <Col>
                <Input 
                  placeholder="Station name"
                  type="text" 
                  name='endStationName'
                  style={{marginLeft:'20%',width:'200px',marginTop:'10px'}}
                  inverted 
                  onChange={(event)=>handleChangeInput(event,index)}
                  value={midStation.endStationName}
                />
              </Col>
              <Col>
                <Input 
                  placeholder="Arrival Time"
                  label="Arrival Time"
                  type="time" 
                  name='arrTime'
                  value={midStation.arrTime}
                  style={{marginLeft:'16.7%',width:'200px',marginTop:'10px',width:'13.7em'}}
                  onChange={(event)=>handleChangeInput(event,index)}
                  inverted 
                />
              </Col>
            </Row>
            <Row>
              <Col>
              <Input 
                  placeholder="Genral Coach Fair"
                  style={{marginLeft:'20%',width:'200px',marginTop:'10px'}}
                  type="number" 
                  name='genCoachFair'
                  value={midStation.genCoachFair}
                  onChange={(event)=>handleChangeInput(event,index)}
                  inverted 
              />
              </Col>
              <Col>
                <Input 
                  placeholder="Arrival Date"
                  type="date" 
                  label="Arrival Date"
                  name='arrDate'
                  value={midStation.arrDate}
                  style={{marginLeft:'16.7%',width:'200px',marginTop:'10px',width:'13.7em'}}
                  onChange={(event)=>handleChangeInput(event,index)}
                  inverted 
                />
              </Col>
            </Row>
            <Row>
              <Col>
              <Input 
                  placeholder="Sleeper Coach Fair"
                  style={{marginLeft:'20%',width:'200px',marginTop:'10px'}}
                  type="number" 
                  name='sleepCoachFair'
                  value={midStation.sleepCoachFair}
                  onChange={(event)=>handleChangeInput(event,index)}
                  inverted 
              />
              </Col>
              <Col>
                <Input 
                  placeholder="Departure Time"
                  type="time" 
                  label="Departure Time"
                  name='deptTime'
                  value={midStation.deptTime}
                  style={{marginLeft:'16.7%',width:'200px',marginTop:'10px',width:'12em'}}
                  onChange={(event)=>handleChangeInput(event,index)}
                  inverted 
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input 
                    placeholder="Ac Coach Fair"
                    style={{marginLeft:'20%',width:'200px',marginTop:'10px'}}
                    type="number" 
                    name='acCoachFair'
                    value={midStation.acCoachFair}
                    onChange={(event)=>handleChangeInput(event,index)}
                    inverted 
                />
              </Col>
              <Col>
                <Input 
                  placeholder="Departure Date"
                  label="Departure Date"
                  name='deptDate'
                  type="date" 
                  style={{marginLeft:'16.7%',width:'200px',marginTop:'10px',width:'12em'}}
                  value={midStation.deptDate}
                  onChange={(event)=>handleChangeInput(event,index)}
                  inverted 
                />
              </Col>
            </Row>
           <ButtonGroup style={{marginLeft:'68.5%',marginTop:'2%'}}>
             <Button onClick={()=>handleRemove(index)}>Remove</Button>
             <Button onClick={handleAddMore}>Add More</Button>
           </ButtonGroup>
          </Container>
        
        </div>
        
        ))
      }
        <Button type='submit'>Add Train</Button>
       
      </Form>
 
      </Segment>
     
       
       
      </div>  
    </div>
    
  )
}

export default Traindata;