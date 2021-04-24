// import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import {Button, Form, Segment } from 'semantic-ui-react'


const History =()=>{



    useEffect(()=>{
      userHistory();
    },[])

    const [showReference,setShowReference]=useState({
      showAll:false,
      showActive:false,
      showCancelled:false
    })
    const [tickets,setTickets]=useState({})
    const [activeTickets,setActiveTickets]=useState({})
    const [cancelledTickets,setCancelledTickets]=useState({})

    const userHistory=async()=>{
        const response=await fetch('http://localhost:8000/user/history/all', {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
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
          // body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
    
        const finalResponse=await response.json();
        setTickets(finalResponse)
      }
      const getAllTickets =()=>{
        if(showReference.showAll==false){
           setShowReference({
            showAll:true,
            showActive:false,
            showCancelled:false
          })
        }else{
          setShowReference({
            showAll:false,
            showActive:false,
            showCancelled:false
          })
        }
      }
      const getActiveTickets =()=>{
        if(showReference.showActive==false){
          setShowReference({
            showAll:false,
            showActive:true,
            showCancelled:false
          })
        console.log(tickets)
        // console.log(tickets)
        const activeOnly=(tickets.allTickets).filter((ticket)=>(ticket.status=='Active'));
        // console.log(activeOnly)
        setActiveTickets({activeOnly})
      }else{
        setShowReference({
          showAll:false,
          showActive:false,
          showCancelled:false
        })
      }
      }
    const getCancelledTickets =()=>{
      if(showReference.showCancelled==false){
        setShowReference({
        showAll:false,
        showActive:false,
        showCancelled:true
      })
      // console.log(tickets)
      const cancelledOnly=tickets.allTickets.filter((ticket)=>(ticket.status=='Cancelled'));
      console.log(cancelledOnly)
      setCancelledTickets({cancelledOnly})
      }else{
        setShowReference({
          showAll:false,
          showActive:false,
          showCancelled:false
        })
      }
    }
    const handleCancelBooking=async (trainName,blockId,seatNo)=>{
      const data={
        trainName:trainName,
        blockId:blockId,
        seatNo:seatNo
      }
      const response=await fetch('http://localhost:8000/user/ticket/cancelTicket', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json', // 'Content-Type': 'application/x-www-form-urlencoded',
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin":true
        },
        body:JSON.stringify(data),
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body: JSON.stringify(data) // body data type must match "Content-Type" header
      })
      const successMessage=response.successMessage;
      const errorMessage=response.errorMessage;
      if(successMessage){
        alert(successMessage)
      }
      if(errorMessage){
        alert(errorMessage)
      }
    }
    return(
      <>
        <div>
          {/* <h1>History</h1> */}
          <Button onClick={getAllTickets}>All Tickets</Button>
          <Button onClick={getActiveTickets}>Active Tickets</Button>
          <Button onClick={getCancelledTickets}>Cancelled Tickets</Button>
        </div>
         {(showReference.showActive) && (
          //  console.log(activeTickets)
           <div>
             {(activeTickets.activeOnly).map((ticket,index)=>{
                // const arrivalDate=(ticket.arrDate).toString();
                // const departureDate=(ticket.deptDate).toString();
                const arrivalDate=(new Date((ticket.arrDate).toString())).toLocaleDateString();
                const arrivalTime=(new Date((ticket.arrDate).toString())).toLocaleTimeString();
                const departureDate=(new Date((ticket.deptDate).toString())).toLocaleDateString();
                const departureTime=(new Date((ticket.deptDate).toString())).toLocaleTimeString();
                return(
                  <div key={index}>
                    <h6>Name: {ticket.firstName} {ticket.midName} {ticket.lastname}</h6>
                    <h6>Age:{ticket.age}</h6>
                    <h6>Gender:{ticket.gender}</h6>
                    <h6>Train Name:{ticket.trainName}</h6>
                    <h6>{ticket.from}-{ticket.to}</h6>
                    <h6>Price:{ticket.totalFair} Rs.</h6>
                    <h6>arr{arrivalTime}</h6>
                    <h6>arrival Date {arrivalDate}</h6>
                    <h6>arrivalTime {arrivalTime}</h6>
                    <h6>departure Time:{departureDate}</h6>
                    <h6>departure Date:{departureTime}</h6>
                    
                    {/* <h6>{arrivalDate}</h6>
                    <h6>{departureDate}</h6> */}
                    <h6>Seat No:{ticket.blockId} {ticket.seatNo}</h6>
                    <h6>Ticket Status:{ticket.status}</h6>
                    <Button onClick={(event)=>handleCancelBooking(event,ticket.trainName,ticket.blockId,ticket.seatNo)}></Button>
                  </div>
                )
             })}
           </div>
          )} 
         {(showReference.showAll) && (
           <div>
           {(tickets.allTickets).map((ticket,index)=>{
            //  const arrivalDate=(ticket.arrDate).toString();
            //  const departureDate=(ticket.deptDate).toString();
            const arrivalDate=(new Date((ticket.arrDate).toString())).toLocaleDateString();
            const arrivalTime=(new Date((ticket.arrDate).toString())).toLocaleTimeString();
            const departureDate=(new Date((ticket.deptDate).toString())).toLocaleDateString();
            const departureTime=(new Date((ticket.deptDate).toString())).toLocaleTimeString();
             return(
              <div key={index}>
              <h6>Name: {ticket.firstName}-{ticket.midName} {ticket.lastname}</h6>
              <h6>Age:{ticket.age}</h6>
              <h6>Gender:{ticket.gender}</h6>
              <h6>Train Name:{ticket.trainName}</h6>
              <h6>{ticket.from} -- {ticket.to}</h6>
              <h6>Price:{ticket.totalFair} Rs.</h6>
              <h6>Arrival Date: {arrivalDate}</h6>
              <h6>ArrivalTime: {arrivalTime}</h6>
              <h6>Departure Time:{departureDate}</h6>
              <h6>Departure Date:{departureTime}</h6>
              
              {/* <h6>{arrivalDate}</h6>
              <h6>{departureDate}</h6> */}
              <h6>Seat No:{ticket.blockId} {ticket.seatNo}</h6>
              <h6>Ticket Status:{ticket.status}</h6>
            </div>
               
             )
           })}
           </div>
         )}
         {(showReference.showCancelled) && (
          <div>
           {(cancelledTickets.cancelledOnly).map((ticket,index)=>{
            //  console.log(typeof(ticket.arrDate))
            const arrivalDate=(new Date((ticket.arrDate).toString())).toLocaleDateString();
            const arrivalTime=(new Date((ticket.arrDate).toString())).toLocaleTimeString();
            const departureDate=(new Date((ticket.deptDate).toString())).toLocaleDateString();
            const departureTime=(new Date((ticket.deptDate).toString())).toLocaleTimeString();
            //  const departureDate=(ticket.deptDate);
            return(
              <div key={index}>
                <h6>Name: {ticket.firstName} {ticket.midName} {ticket.lastname}</h6>
                <h6>Age:{ticket.age}</h6>
                <h6>Gender:{ticket.gender}</h6>
                <h6>Train Name:{ticket.trainName}</h6>
                <h6>{ticket.from}-{ticket.to}</h6>
                <h6>Price:{ticket.totalFair} Rs.</h6>                     
                <h6>Arrival Date: {arrivalDate}</h6>
                <h6>ArrivalTime: {arrivalTime}</h6>
                <h6>Departure Time: {departureDate}</h6>
                <h6>Departure Date: {departureTime}</h6>
                {/* <h6>{departureDate}</h6> */} 
                <h6>Seat No:{ticket.blockId} {ticket.seatNo}</h6>
                <h6>Ticket Status:{ticket.status}</h6>
                {/* <Button onClick={(ticket.trainName,ticket.blockId,ticket.seatNo)=>{handleCancelBooking(trainName,blockId,seatNo)}} >Cancel Booking</Button> */}
                
              </div>
            )
           })}
         </div>
         )}
      </>  
    )
}
export default History;