import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion'
import notebook from '../images/notebook.png'
import '../components/Header.css'
import banner01 from '../images/banner_01.jpg'
import banner02 from '../images/banner_02.jpg'
import banner03 from '../images/banner_03.jpg'



export const Header = () => {
    return (
        <div className='MainDiv'>        
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner01}
                        alt="First slide"
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner02}
                        alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner03}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Header;