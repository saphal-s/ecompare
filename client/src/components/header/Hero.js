import React from 'react';
import { MdOutlineLocalOffer, MdSystemUpdateAlt } from 'react-icons/md';
import { AiOutlineMoneyCollect, AiOutlineFieldTime } from 'react-icons/ai';
import Carousel from 'react-bootstrap/Carousel';
import Sociali from './Sociali';

const Hero = () => {
    return (
        <div className="hero_section">
            <div className="container carousel">
                <div className="row">
                    <div className="col-md-7">
                        <Carousel className="cars">
                            <Carousel.Item>
                                <img src="./image/car4.jpg" alt="carousel_image" className="w-100" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="./image/carls.jpg" alt="carousel_image" className="w-100" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="./image/carl.jpg" alt="carousel_image" className="w-100" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-md-5 side-ads">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="./image/m1.jpg" alt="carousel_image" className="w-100" />
                            </div>
                            <div className="col-md-6">
                                <img src="./image/car2.png" alt="carousel_image" className="w-100" />
                            </div>
                            <div className="col-md-6">
                                <img src="./image/car4.jpg" alt="carousel_image" className="w-100" />
                            </div>
                            <div className="col-md-6">
                                <img src="./image/m2.jpg" alt="carousel_image" className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Sociali />
            <div className="container">
                <div className="why_us">
                    <div className="row">
                        <div className="col-md-3 d-flex">
                            <div className="money-icon">
                                <AiOutlineMoneyCollect className="micon" />
                            </div>
                            <div className="why">
                                <h5>Save Your Money</h5>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="money-icon">
                                <AiOutlineFieldTime className="micon" />
                            </div>
                            <div className="why">
                                <h5>Save Your Time</h5>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="money-icon">
                                <MdOutlineLocalOffer className="micon" />
                            </div>
                            <div className="why">
                                <h5>Offer Your Choices</h5>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="money-icon">
                                <MdSystemUpdateAlt className="micon" />
                            </div>
                            <div className="why">
                                <h5>Up-to-date With The Price</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
