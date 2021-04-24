import React from 'react'
import Card from "react-bootstrap/Card";
import {Button, Form, FormGroup , Label, Input ,Grid,Col,Row,Container} from 'react-bootstrap'
import './Cards.css'
 
  const Cards = () => {
    const cardInfo = [
      {
        image: "https://www.flaticon.com/svg/vstatic/svg/821/821354.svg?token=exp=1615919400~hmac=0e84e06bed01ae927871faca6b0bda06",
        title: "Train Booking",
      },
      {
        image: "https://www.flaticon.com/premium-icon/icons/svg/984/984284.svg",
        title: "Airplane Booking",
      },

      {
        image: "https://www.flaticon.com/svg/vstatic/svg/3170/3170733.svg?token=exp=1615960195~hmac=7b745e384712f02af13fd2b7efdca271",
        title: "Restaurant",
      },

      
    ];

    const renderCard = (card, index) => {
      return (
          <Col md={4}>  
            <Card style={{width: "18rem",flexDirection: 'row',justifyContent: 'right', display: 'flex' ,flex:1}} key={index} className="box">
              <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button href="/trainbook">Book</Button> 
              </Card.Body>
            </Card>
          </Col>
      )
    }   

return (
  <div>
  <div className="App">
<contaniner>
  <Row>
        {cardInfo.map(renderCard)}
  </Row>
  </contaniner>
    </div>
    </div>

  )
}

export default Cards;
