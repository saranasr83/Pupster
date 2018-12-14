import React from "react";
import './Carousel.css';
import { Carousel } from 'react-bootstrap';


const SafetyTips = props => (
    <div>
        <Carousel className="frame">
            <Carousel.Item>
                <img className='imgFormat' alt="900x500" src={props.imageOne} />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img className='imgFormat' alt="900x500" src={props.imageTwo} />
                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img className='imgFormat' alt="900x500" src={props.imageThree} />
                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    </div>
)

export default SafetyTips;