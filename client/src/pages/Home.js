import React from 'react';
import { Rate } from 'antd';
import './style.css'
import Header from '../components/header/Header';
import Hero from '../components/header/Hero';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <div className="container pt-5 pb-5">
                <div className="newest_arrivals">
                    <div className="newest-head">
                        <h2>Newst Arrivals</h2>
                    </div>
                    <div className="product-cards">
                        <div className="newest-card">
                            <Link to='/details'>
                                <div className="cards">
                                    <div className="card-image">
                                        <img src="./image/product/samsung.jpg" alt="product_image" />
                                    </div>
                                    <div className="card-des">
                                        <div className="product-price">
                                            <h5>RS.120000</h5>
                                            <div className="company-logo">
                                                <img src="./image/product/alogo.png" height={40} alt="company_image" />
                                            </div>
                                        </div>
                                        <div className="product-title">
                                            <p>SAMSUNG Galaxy A53 5G A Series Cell Phone ....</p>
                                        </div>
                                        <div className="rating">
                                            <Rate allowHalf defaultValue={2.5} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="newest-card">
                            <div className="cards">
                                <div className="card-image">
                                    <img src="./image/product/samsung.jpg" alt="product_image" />
                                </div>
                                <div className="card-des">
                                    <div className="product-price">
                                        <h5>RS.120000</h5>
                                        <div className="company-logo">
                                            <img src="./image/product/flipkart.png" height={40} alt="company_image" />
                                        </div>
                                    </div>
                                    <div className="product-title">
                                        <p>SAMSUNG Galaxy A53 5G A Series Cell Phone ....</p>
                                    </div>
                                    <div className="rating">
                                        <Rate allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newest-card">
                            <div className="cards">
                                <div className="card-image">
                                    <img src="./image/product/samsung.jpg" alt="product_image" />
                                </div>
                                <div className="card-des">
                                    <div className="product-price">
                                        <h5>RS.120000</h5>
                                        <div className="company-logo ps-2">
                                            <img src="./image/product/daraz.png" height={40} alt="company_image" />
                                        </div>
                                    </div>
                                    <div className="product-title">
                                        <p>SAMSUNG Galaxy A53 5G A Series Cell Phone ....</p>
                                    </div>
                                    <div className="rating">
                                        <Rate allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newest-card">
                            <div className="cards">
                                <div className="card-image">
                                    <img src="./image/product/samsung.jpg" alt="product_image" />
                                </div>
                                <div className="card-des">
                                    <div className="product-price">
                                        <h5>RS.120000</h5>
                                        <div className="company-logo">
                                            <img src="./image/product/alogo.png" height={40} alt="company_image" />
                                        </div>
                                    </div>
                                    <div className="product-title">
                                        <p>SAMSUNG Galaxy A53 5G A Series Cell Phone ....</p>
                                    </div>
                                    <div className="rating">
                                        <Rate allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newest-card">
                            <div className="cards">
                                <div className="card-image">
                                    <img src="./image/product/samsung.jpg" alt="product_image" />
                                </div>
                                <div className="card-des">
                                    <div className="product-price">
                                        <h5>RS.120000</h5>
                                        <div className="company-logo">
                                            <img src="./image/product/flipkart.png" height={40} alt="company_image" />
                                        </div>
                                    </div>
                                    <div className="product-title">
                                        <p>SAMSUNG Galaxy A53 5G A Series Cell Phone ....</p>
                                    </div>
                                    <div className="rating">
                                        <Rate allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ads">
                    <div className="row p-5">
                        <div className="col-md-4">
                            <img src="./image/khalti.png" className='w-100' alt="ads" />
                        </div>
                        <div className="col-md-4">
                            <img src="./image/phonepay.png" className='w-100' alt="ads" />
                        </div>
                        <div className="col-md-4">
                            <img src="./image/esewa.jpg" className='w-100' alt="ads" />
                        </div>
                    </div>
                </div>
                <div className="newest_arrivals">
                    <div className="newest-head">
                        <h2>Featured Products</h2>
                    </div>
                    <div className="product-cards">
                        <div className="newest-card">
                            <div className="cards">
                                <div className="card-image">
                                    <img src="./image/product/samsung.jpg" alt="product_image" />
                                </div>
                                <div className="card-des">
                                    <div className="product-price">
                                        <h5>RS.120000</h5>
                                        <div className="company-logo">
                                            <img src="./image/product/alogo.png" height={40} alt="company_image" />
                                        </div>
                                    </div>
                                    <div className="product-title">
                                        <p>SAMSUNG Galaxy A53 5G A Series Cell Phone ....</p>
                                    </div>
                                    <div className="rating">
                                        <Rate allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newest-card">
                            <div className="cards">
                                <div className="card-image">
                                    <img src="./image/product/samsung.jpg" alt="product_image" />
                                </div>
                                <div className="card-des">
                                    <div className="product-price">
                                        <h5>RS.120000</h5>
                                        <div className="company-logo">
                                            <img src="./image/product/alogo.png" height={40} alt="company_image" />
                                        </div>
                                    </div>
                                    <div className="product-title">
                                        <p>SAMSUNG Galaxy A53 5G A Series Cell Phone ....</p>
                                    </div>
                                    <div className="rating">
                                        <Rate allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newest-card">
                            <div className="cards">
                                <div className="card-image">
                                    <img src="./image/product/samsung.jpg" alt="product_image" />
                                </div>
                                <div className="card-des">
                                    <div className="product-price">
                                        <h5>RS.120000</h5>
                                        <div className="company-logo">
                                            <img src="./image/product/alogo.png" height={40} alt="company_image" />
                                        </div>
                                    </div>
                                    <div className="product-title">
                                        <p>SAMSUNG Galaxy A53 5G A Series Cell Phone ....</p>
                                    </div>
                                    <div className="rating">
                                        <Rate allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newest-card">
                            <div className="cards">
                                <div className="card-image">
                                    <img src="./image/product/samsung.jpg" alt="product_image" />
                                </div>
                                <div className="card-des">
                                    <div className="product-price">
                                        <h5>RS.120000</h5>
                                        <div className="company-logo">
                                            <img src="./image/product/alogo.png" height={40} alt="company_image" />
                                        </div>
                                    </div>
                                    <div className="product-title">
                                        <p>SAMSUNG Galaxy A53 5G A Series Cell Phone ....</p>
                                    </div>
                                    <div className="rating">
                                        <Rate allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newest-card">
                            <div className="cards">
                                <div className="card-image">
                                    <img src="./image/product/samsung.jpg" alt="product_image" />
                                </div>
                                <div className="card-des">
                                    <div className="product-price">
                                        <h5>RS.120000</h5>
                                        <div className="company-logo">
                                            <img src="./image/product/alogo.png" height={40} alt="company_image" />
                                        </div>
                                    </div>
                                    <div className="product-title">
                                        <p>SAMSUNG Galaxy A53 5G A Series Cell Phone ....</p>
                                    </div>
                                    <div className="rating">
                                        <Rate allowHalf defaultValue={2.5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ads">
                    <div className="row pt-3">
                        <div className="col-md-4 col-lg-4">
                            <img src="./image/lap1.webp" className='w-100' alt="laptop" />
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <img src="./image/lap2.jpg" className='w-100' alt="laptop" />
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <img src="./image/mbl1.jpg" className='w-100' alt="laptop" />
                        </div>
                    </div>
                </div>
                <div className="newest_arrivals">
                    <div className="newest-head">
                        <h2>Just For You</h2>
                    </div>
                    <div className="just-card">
                        <div className="jcard">
                            <div className="jcard-img">
                                <img src="./image/iphone.jpg" height={140} alt="" />
                            </div>
                            <div className="jcard-title">
                                <h5>iPhone</h5>
                            </div>
                        </div>
                        <div className="jcard">
                            <div className="jcard-img pt-5">
                                <img src="./image/dell.jpg" height={100} width={150} alt="" />
                            </div>
                            <div className="jcard-title ">
                                <h5>Dell</h5>
                            </div>
                        </div>
                        <div className="jcard">
                            <div className="jcard-img pt-5">
                                <img src="./image/smart.jpg" height={120} width={120} alt="" />
                            </div>
                            <div className="jcard-title ">
                                <h5>Smart Watch</h5>
                            </div>
                        </div>
                        <div className="jcard">
                            <div className="jcard-img pt-4">
                                <img src="./image/headphone.jpg" className='pt-2' height={120} width={120} alt="" />
                            </div>
                            <div className="jcard-title ">
                                <h5>Head Phone</h5>
                            </div>
                        </div>
                        <div className="jcard">
                            <div className="jcard-img pt-4">
                                <img src="./image/s21.webp" className='pt-2' height={120} width={120} alt="" />
                            </div>
                            <div className="jcard-title ">
                                <h5>Samsung</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ads">
                    <div className="row pt-3">
                        <div className="col-md-4 col-lg-4">
                            <img src="./image/mbl2.jpg" className='w-100' alt="laptop" />
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <img src="./image/lap2.jpg" className='w-100' alt="laptop" />
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <img src="./image/mbl1.jpg" className='w-100' alt="laptop" />
                        </div>
                    </div>
                </div>
                <div className="ads mt-3">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <img src="./image/mbl1.jpg" className='w-100' alt="" />
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <img src="./image/lap1.webp" className='w-100' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home