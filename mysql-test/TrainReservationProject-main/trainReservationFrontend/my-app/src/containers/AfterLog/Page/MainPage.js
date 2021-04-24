import React, { Component } from 'react'  

import Carousel from 'react-bootstrap/Carousel'  
import './Cards.css'

export class MainPage extends Component {  

        render(){
                return(
                    <Carousel>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://blog.railyatri.in/wp-content/uploads/2019/01/Train-ticket-transfer-deadline.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://dumynlq1n57zm.cloudfront.net/article/167/e91b583-phpCrKL3N.gif"
                            alt="Third slide"
                        />
                    
                        <Carousel.Caption>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media3.giphy.com/media/3oKHWoHCr4VtVI6H0A/giphy.gif"
                            alt="Third slide"
                        />
                    
                        <Carousel.Caption>
                        </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                )
            }
            
        }
  

export default MainPage  