
import React,{ Component }  from 'react'
import {Button, Form, Segment } from 'semantic-ui-react'
import Navbar from '../NavBar'
import { Container, Row, Col } from 'reactstrap';


export default class AfterBook extends Component {
  
  constructor(props){
    super(props);
    this.state={
      sourceStation:'',
      destinationStation:'',
      journeyDate:'',
      trainsList:[],
      trains:[{
        sArrTime:Date.now(),
        sArrDate:Date.now(),
        sDeptTime:Date.now(),
        sDeptDate:Date.now(),
        dArrTime:Date.now(),
        dArrDate:Date.now(),
        dDeptTime:Date.now(),
        dDeptDate:Date.now()
      }],
      isLoggedIn:true,
      seats:false,
      acSeats:0,
      genSeats:0,
      sleepSeats:0,
      fair:false,
      acFair:0,
      sleepFair:0,
      genFair:0,
      moreDetails:false,
      singleTrain:{
        from:{},
        to:{},
        midStations:{}
      },
      bookTicket:false,
      bookTicketFor:{},
      firstName:'',
      middleName:'',
      lastName:'',
      age:''
    }
  }
  changeFirstName=(event)=>{
    this.setState({
      firstName:event.target.value
    })
  }
  changeMiddleName=(event)=>{
    this.setState({
      middleName:event.target.value
    })
  }
  changeLastName=(event)=>{
    this.setState({
      lastName:event.target.value
    })
  }
  changeAge=(event)=>{
    this.setState({
      age:event.target.value
    })
  }
  changeSourceStation=(event)=>{
    this.setState({
      sourceStation:event.target.value
    })
  }
  changeDestinationstation=(event)=>{
    this.setState({
      destinationStation:event.target.value
    })
  }
  changeJourneyDate=(event)=>{
    this.setState({
      journeyDate:event.target.value
    })
  }

  handleSubmit=async (event)=>{
    event.preventDefault();
    const data={
      sourceStation:this.state.sourceStation,
      destinationStation:this.state.destinationStation,
      journeyDate:this.state.journeyDate
    }
    const response=await fetch('http://localhost:8000/user/train/search', {
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
    const availabelTrains=finalResponse.availabelTrains;
    const message=finalResponse.message;
    if(availabelTrains){
      this.setState({
        trainsList:availabelTrains
      })
      var sArrTime=Date.now();
      var sArrDate=Date.now();
      var sDeptTime=Date.now();
      var sDeptDate=Date.now();
      var dArrTime=Date.now();
      var dArrDate=Date.now();
      var dDeptTime=Date.now();
      var dDeptDate=Date.now();
      availabelTrains.map((train)=>{
        if(train.from.stationName==this.state.sourceStation){
          sArrDate=(new Date(train.from.deptDate)).toLocaleDateString();
          sArrTime=(new Date(train.from.deptDate)).toLocaleTimeString();
          sDeptDate=(new Date(train.from.deptDate)).toLocaleDateString();
          sDeptTime=(new Date(train.from.deptDate)).toLocaleTimeString();
        }
        if(train.to.stationName==this.state.destinationStation){
          dArrDate=(new Date(train.to.arrDate)).toLocaleDateString();
          dArrTime=(new Date(train.to.arrDate)).toLocaleTimeString();
          dDeptDate=(new Date(train.to.arrDate)).toLocaleDateString();
          dDeptTime=(new Date(train.to.arrDate)).toLocaleTimeString();
        }
        train.midStations.map((midStation)=>{
          if(midStation.station.stationName==this.state.sourceStation){
            sArrDate=(new Date(midStation.station.arrDate)).toLocaleDateString();
            sArrTime=(new Date(midStation.station.arrDate)).toLocaleTimeString();
            sDeptDate=(new Date(midStation.station.deptDate)).toLocaleDateString();
            sDeptTime=(new Date(midStation.station.deptDate)).toLocaleTimeString();
          }
          if(midStation.station.stationName==this.state.destinationStation){
            dArrDate=(new Date(midStation.station.arrDate)).toLocaleDateString();
            dArrTime=(new Date(midStation.station.arrDate)).toLocaleTimeString();
            dDeptDate=(new Date(midStation.station.deptDate)).toLocaleDateString();
            dDeptTime=(new Date(midStation.station.deptDate)).toLocaleTimeString();
          }
        })
        this.setState({
          trains:{
          sArrDate,
          sArrTime,
          sDeptDate,
          sDeptTime,
          dArrDate,
          dArrTime,
          dDeptDate,
          dDeptTime
        }
        })
      })
    }else{
      alert(message);
    }
    
  }


  BookTicketClicked=(train)=>{
    if(this.state.bookTicket==false){
      if(!(this.state.isLoggedIn)){
        alert('Please login to your account!')
      }else{
        this.SeatAvailabilityClicked(train,false);
        this.CheckFairClicked(train,false);
        this.setState({
          bookTicket:true,
          bookTicketFor:train
        })
      }
    }else{
      this.setState({
        bookTicket:false
      })
    }
      
  }


  MoreDetailsClicked=(train)=>{
    if(this.state.moreDetails==false){
      this.setState({
        moreDetails:true,
        singleTrain:{
          from:train.from,
          to:train.to,
          midStations:train.midStations
        }
      })
    }else{
      this.setState({
        moreDetails:false,
        singleTrain:''
      })
    }
   }


  CheckFairClicked=async(train,param=true)=>{
    if(this.state.fair==false){
      const data={
        trainName:train.name,
        fromStation:this.state.sourceStation,
        toStation:this.state.destinationStation
      }
      const response=await fetch('http://localhost:8000/user/train/calculateFair', {
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
      if(finalResponse){
        this.setState({
          acFair:finalResponse.acFair,
          genFair:finalResponse.genFair,
          sleepFair:finalResponse.sleepFair,
          fair:param,
          // seats:false,
          // moreDetails:false
        })
      }
    }else{
      this.setState({
        fair:false
      })
    }
    
   }


  SeatAvailabilityClicked=async (train,param=true)=>{
    if(this.state.seats==false){
      const data={
        trainName:train.name
      }
      const response=await fetch('http://localhost:8000/user/train/seatAvalibility', {
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
      if(finalResponse){
        this.setState({
          acSeats:finalResponse.acSeats,
          genSeats:finalResponse.genSeats,
          sleepSeats:finalResponse.sleepSeats,
          seats:param,
          // fair:false,
          // moreDetails:false
        })
  
      }
    }else{
      this.setState({
        seats:false
      })
    }
    
  }

  handleBooking=async(event)=>{
    event.preventDefault();
    var gender;
    var coachType;
    document.getElementsByName('gender').forEach((ele)=>{
      if(ele.checked){
        gender=ele.value;
      }
    })
    document.getElementsByName('coachType').forEach((ele)=>{
      if(ele.checked){
        coachType=ele.value;
      }
    })
    // const coachType=document.getElementsByName('coachType').value;
    if(coachType=='gen'&&this.state.genSeats==0){
      alert('No available seats for this coach!');
    }else if(coachType=='sleep'&&this.state.sleepSeats==0){
      alert('No available seats for this coach!');
    }else if(coachType=='ac'&&this.state.acSeats==0){
      alert('No available seats for this coach!');
    }
    var totalFair=null;
    if(coachType=='gen'){
      totalFair=this.state.genFair;
    }else if(coachType=='sleep'){
      totalFair=this.state.sleepFair;
    }else{
      totalFair=this.state.acFair;
    }
    const data={
      firstName:this.state.firstName,
      midName:this.state.middleName,
      lastName:this.state.lastName,
      age:this.state.age,
      fromName:this.state.sourceStation,
      toName:this.state.destinationStation,
      trainName:this.state.bookTicketFor.name,
      gender,
      coachType,
      totalFair
    }
    console.log(data)
    const response=await fetch('http://localhost:8000/user/ticket/bookTicket', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json', // 'Content-Type': 'application/x-www-form-urlencoded',
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
    }else if(errorMessage){
      alert(errorMessage);
    }
  }
  render() {
    var {trainsList,fair,seats}=this.state;
    if(trainsList.length==0){
      return (
        <div>
        <Navbar/>
        <header style={{backgroundImage:`url('https://i.ytimg.com/vi/GN24zFl9xOM/maxresdefault.jpg')`,height:'1000px',backgroundSize:'cover',display: 'block'}}><h1 style={{padding:'100px',textAlign:'center',fontSize:'xxx-large',fontFamily:'ui-rounded',color:'red'}}>Book Train Tickets</h1>
        <Segment  inverted style={{marginLeft:'25%',marginTop:'87px',width:'60%',borderRadius:'20px',height:'100px'}}>
        <Form  onSubmit={this.handleSubmit}>
          <Form.Group widths={4}>
  
            <Form.Input  
            onChange={this.changeSourceStation}
            value={this.state.sourceStation}
            type="string" 
            placeholder='Source Station' 
            name='sourceStation'
            style={{width:'100%',marginTop:'8%'}}
            />
  
            <Form.Input  
            onChange={this.changeDestinationstation}
            value={this.state.destinationStation}
            type="string" 
            placeholder='Destination Station' 
            name='destinationStation'
            style={{width:'100%',marginTop:'8%'}}
            />
  
            <Form.Input  
            onChange={this.changeJourneyDate}
            value={this.state.journeyDate}
            type="date"   
            name='journeyDate'
            style={{width:'100%',marginTop:'8%'}} 
            />
  
            <Button  primary type="submit" style={{width:'20%',marginTop:'2%'}}>Search</Button>
  
          </Form.Group>
         </Form>
        </Segment>
        </header>

        </div>
      )
    }
    if(trainsList.length!=0){
      return (
        <div >
        <Navbar/>
        <Segment style={{height:'100%'}}>
          {trainsList.map((train)=>{
            return <div key={train.number} style={{backgroundImage:`url('https://i.ytimg.com/vi/GN24zFl9xOM/maxresdefault.jpg')`,backgroundColor:'gray',marginTop:'0.6em',marginBottom:'0.6em',marginLeft:'0.4em',marginRight:'0.4em'}}>
              <h1 style={{textAlign:'center',marginTop:'1em'}}>{train.name}</h1>
              <h4 style={{textAlign:'centre',marginTop:'1em',marginLeft:'31em'}}>Train No {train.number}</h4>
              <Container>
               <Row>
                <Col style={{marginLeft:'13em',marginBottom:'0.7em'}}><h3>{this.state.sourceStation}</h3></Col>
                <Col style={{marginLeft:'13em',marginBottom:'0.7em'}}><h3>{this.state.destinationStation}</h3></Col>
               </Row>
               <Row>
                <Col>Arr Time {this.state.trains.sArrTime}</Col>
                <Col>Dept Time {this.state.trains.sDeptTime}</Col>
                <Col>Arr Time {this.state.trains.dArrTime}</Col>
                <Col>Dept Time {this.state.trains.dDeptTime}</Col>
               </Row>
               <Row>
                <Col>Arr Date {this.state.trains.sArrDate}</Col>
                <Col>Dept Date {this.state.trains.sDeptDate}</Col>
                <Col>Arr Date {this.state.trains.dArrDate}</Col>
                <Col>Dept Date {this.state.trains.dDeptDate}</Col>
               </Row>
              </Container>

              <Button 
              type='submit'
              style={{marginLeft:'65%'}}
              onClick={()=>this.MoreDetailsClicked(train)}
              >
              More Details..
              </Button>
              <Button 
              onClick={()=>this.SeatAvailabilityClicked(train)}
              type='submit'
              >
              Seat Availability
              </Button>
              <Button 
              type='submit'
              onClick={()=>this.CheckFairClicked(train)}
              >
              Check Fair
              </Button>
              <Button 
              type='submit'
              onClick={()=>this.BookTicketClicked(train)}
              >
              Book Ticket
              </Button>
              </div>
          })}
          {seats&& (<div>
            <Container style={{width:'30%',marginLeft:'67%',backgroundImage:`url('https://tse4.mm.bing.net/th?id=OIP.h_fVLIeeH98VAxIuxTTUnAHaEK&pid=Api&P=0&w=288&h=163')`}}>
              <Row>
                <Col style={{backgroundColor:'white',marginTop:'1em',marginRight:'1em'}}>General Seats: Avl {this.state.genSeats}</Col>
                <Col style={{backgroundColor:'white',marginTop:'1em',marginRight:'1em'}}>Sleeper Seats: Avl {this.state.sleepSeats}</Col>
                <Col style={{backgroundColor:'white',marginTop:'1em',marginRight:'1em'}}>Ac Seats: Avl      {this.state.acSeats}</Col>
              </Row>
            </Container>
          </div>)}
          {fair&& (<div>
            <Container style={{width:'30%',marginLeft:'67%',backgroundImage:`url('https://tse4.mm.bing.net/th?id=OIP.h_fVLIeeH98VAxIuxTTUnAHaEK&pid=Api&P=0&w=288&h=163')`}}>
              <Row>
                <Col style={{backgroundColor:'white',marginTop:'1em',marginRight:'1em'}}>General Coach: ₹ {this.state.genFair}</Col>
                <Col style={{backgroundColor:'white',marginTop:'1em',marginRight:'1em'}}>Sleeper Coach: ₹ {this.state.sleepFair}</Col>
                <Col style={{backgroundColor:'white',marginTop:'1em',marginRight:'1em'}}>Ac Coach: ₹ {this.state.acFair}</Col>
              </Row>
            </Container>
          </div>)}
          {this.state.moreDetails && (
            <div>
            <Container style={{width:'100%',marginTop:'1em',backgroundImage:`url('https://png.pngtree.com/thumb_back/fw800/back_pic/04/23/50/4858345511b3cf5.jpg')`}}>
              <Row style={{marginBottom:'0.5em',width:'100%'}}>
                <Col ><h3>Station Name</h3></Col>
                <Col ><h3>Arrival Date</h3></Col>
                <Col ><h3>Arrival Time</h3></Col>
                <Col ><h3>Departure Date</h3></Col>
                <Col ><h3>Departure Time</h3></Col>
              </Row>
              <Row>
                <Col >{this.state.singleTrain.from.stationName}</Col>
                <Col >{(new Date(this.state.singleTrain.from.deptDate)).toLocaleDateString()}</Col>
                <Col >{(new Date(this.state.singleTrain.from.deptDate)).toLocaleTimeString()}</Col>
                <Col >{(new Date(this.state.singleTrain.from.deptDate)).toLocaleDateString()}</Col>
                <Col >{(new Date(this.state.singleTrain.from.deptDate)).toLocaleTimeString()}</Col>
              </Row>
              {(this.state.singleTrain.midStations).map((station)=>{
                console.log(station)
                return(
                <Row>
                  <Col >{station.station.stationName}</Col>
                  <Col >{(new Date(station.station.arrDate)).toLocaleDateString()}</Col>
                  <Col >{(new Date(station.station.arrDate)).toLocaleTimeString()}</Col>
                  <Col >{(new Date(station.station.deptDate)).toLocaleDateString()}</Col>
                  <Col >{(new Date(station.station.deptDate)).toLocaleTimeString()}</Col>
                </Row>
                
                )
              })}
              <Row>
                <Col >{this.state.singleTrain.to.stationName}</Col>
                <Col >{(new Date(this.state.singleTrain.to.arrDate)).toLocaleDateString()}</Col>
                <Col >{(new Date(this.state.singleTrain.to.arrDate)).toLocaleTimeString()}</Col>
                <Col >{(new Date(this.state.singleTrain.to.arrDate)).toLocaleDateString()}</Col>
                <Col >{(new Date(this.state.singleTrain.to.arrDate)).toLocaleTimeString()}</Col>
              </Row>
             </Container> 
           </div>)} 

           {this.state.bookTicket && <div>
            <Form  onSubmit={this.handleBooking}>

              <Form.Group widths={4}>
  
              <Form.Input  
                onChange={this.changeFirstName}
                value={this.state.firstName}
                type="string" 
                required
                placeholder='First Name' 
                name='firstName'
                style={{width:'100%',marginTop:'8%'}}
              />
              <Form.Input  
                required
                onChange={this.changeMiddleName}
                value={this.state.middleName}
                type="string" 
                placeholder='Middle Name' 
                name='midName'
                style={{width:'100%',marginTop:'8%'}}
              />
              <Form.Input  
                onChange={this.changeLastName}
                required
                value={this.state.lastName}
                type="string" 
                placeholder='Last Name' 
                name='lastName'
                style={{width:'100%',marginTop:'8%'}}
              />
              <Form.Input  
                onChange={this.changeAge}
                required
                value={this.state.age}
                type="number" 
                placeholder='Age' 
                name='age'
                style={{width:'70%',marginTop:'8%',marginRight:'0%'}}
              />
             
              <label style={{marginTop:'1%',marginRight:'3%'}}>
                <Form.Input  
                  value="male"
                  type="radio" 
                  name='gender'
                  style={{marginTop:'18%',marginRigt:'140em'}}
                />
                Male
              </label>
              <label style={{marginTop:'1%',marginRight:'2%'}}>
                <Form.Input  
                  value="female"
                  type="radio" 
                  name='gender'
                  style={{marginTop:'18%'}}
                />
                Female
              </label>
             
              <label style={{marginTop:'1%',marginRight:'2%'}}>
                <Form.Input  
                  value="gen"
                  type="radio" 
                  name='coachType'
                  style={{marginTop:'18%'}}
                />
                General Coach
              </label>
              <label style={{marginTop:'1%',marginRight:'2%'}}>
                <Form.Input  
                  value="sleep"
                  type="radio" 
                  name='coachType'
                  style={{marginTop:'18%'}}
                />
                Sleep Coach
              </label>
              <label style={{marginTop:'1%',marginRight:'1%'}}>
                <Form.Input  
                  value="ac"
                  type="radio" 
                  name='coachType'
                  style={{marginTop:'18%'}}
                />
                Ac Coach
              </label>
              
            <Button type="submit" style={{width:'20%',marginTop:'1%',marginBottom:'1.5%'}}>Confirm Booking</Button>
   
          </Form.Group>
          </Form>
          </div>}
          
        </Segment>
        </div>
      )
    }
    
    
  }
}

