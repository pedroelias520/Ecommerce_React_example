import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion/dist/framer-motion"
import React from 'react';
import '../components/Header.css'
import banner01 from '../images/banner_01.jpg'
import banner02 from '../images/banner_02.jpg'
import banner03 from '../images/banner_03.jpg'
import nikeIcon from '../images/icon_nike.jpg'
import filaIcon from '../images/icon_fila.jpg'
import adidasIcon from '../images/icon_adidas.jpg'
import pumaIcon from '../images/icon_puma.jpg'




export const Header = () => {
    return (
        <div className='MainDiv'>
            <Carousel fade variant='dark'>
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
            <div className='iconRows'>
                <motion.div whileHover={{ scale: 0.95 }} className="fila iconMark">
                    <img
                        src={filaIcon}
                        alt="Third slide"
                    />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.95 }}
                    className="puma iconMark"
                >
                    <img

                        src={pumaIcon}
                        alt="Third slide"
                    />
                </motion.div>

                <motion.div whileHover={{ scale: 0.95 }}
                    className="nike iconMark"
                >
                    <img

                        src={nikeIcon}
                        alt="Third slide"
                    />
                </motion.div>

                <motion.div
                    whileHover={{ scale: 0.95 }}
                    className="adidas iconMark"
                >
                    <img
                        src={adidasIcon}
                        alt="Third slide"
                    />
                </motion.div>

            </div>
        </div>
    )
}

export default Header;