import React from 'react';
import Header from '../../components/header/Header';
import Sociali from '../../components/header/Sociali';
import { FiEye } from 'react-icons/fi';
import { Rate } from 'antd';
import './style.css';
import Footer from '../../components/footer/Footer';

const Details = () => {
    return (
        <div>
            <Header />
            <Sociali />
            <div className="container pb-4">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="product-description">
                            <div className="product_image p-5">
                                <img src="./image/product/samsung.jpg" alt="product_image"
                                    height={300} width={240} />
                            </div>
                            <div className="specification">
                                <div className="specificaiton_head">
                                    <h2>Samsung Galaxy A53 Specifications</h2>
                                </div>
                                <div className="specifiacation_list">
                                    <ul>
                                        <li><strong>Design:</strong> 159.6 x 74.8 x 8.1mm, 189grams, IP67</li>
                                        <li><strong>Display:</strong> 6.5-inches “Infinity-O” Super AMOLED, 120Hz refresh rate, Gorilla Glass 5</li>
                                        <li><strong>Resolution:</strong> FHD+ (2400 x 1080 pixels), 407 PPI</li>
                                        <li><strong>Chipset:</strong>  Samsung Exynos 1280</li>
                                        <li><strong>Memory:</strong>  6 RAM, 128GB storage (expandable up to 1TB)</li>
                                        <li><strong>Software & UI:</strong>  Android 12 with Samsung’s One UI 4.1 on top</li>
                                        <li><strong>Rear Camera::</strong>  Quad-camera; <br />
                                            – 64MP primary lens, OIS <br />
                                            – 12MP ultra-wide lens <br />
                                            – 5MP macro sensor
                                            – 5MP depth sensor </li>
                                        <li><strong>Front Camera: </strong>  32MP (f/2.2)</li>
                                        <li><strong>Audio: </strong>  Stereo Speakers, Dolby Atmos</li>
                                        <li><strong>Speaker: </strong>  Optical in-display fingerprint sensor, Face unlock, Samsung Knox</li>
                                        <li><strong>Battery: </strong>5000mAh with 25W fast charging (no charger in the box)</li>
                                        <li><strong>Extra: </strong> 1 year of breakage insurance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pt-5 col-lg-6">
                        <div className="watch-review-button pb-3">
                            <a href="https://www.youtube.com/watch?v=Y0RPogvoHt8" target="__blank"><button>Watch Review</button></a>
                        </div>
                        <div className="review-wishlist">
                            <div className="review-button mt-3 ms-2">
                                <p>Add your Review <FiEye /><span>10</span></p>
                            </div>
                            <div className="review-button">
                                <button>add to wishlist</button>
                            </div>
                        </div>
                        <div className="companies">
                            <div className="company-logo">
                                <img src="./image/product/alogo.png" alt="company_logo" />
                            </div>
                            <div className="price-buy">
                                <div className="price p-2">
                                    <p>Rs.41000 <br />
                                        <del>Rs.55000</del>
                                    </p>
                                </div>
                                <div className="buy p-2">
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="companies">
                            <div className="company-logo">
                                <img src="./image/product/flipkart.png" className='p-1' alt="company_logo" />
                            </div>
                            <div className="price-buy">
                                <div className="price p-2">
                                    <p>Rs.41000 <br />
                                        <del>Rs.55000</del>
                                    </p>
                                </div>
                                <div className="buy p-2">
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="companies">
                            <div className="company-logo">
                                <img src="./image/product/daraz.png" className='p-3' alt="company_logo" />
                            </div>
                            <div className="price-buy">
                                <div className="price p-2">
                                    <p>Rs.41000 <br />
                                        <del>Rs.55000</del>
                                    </p>
                                </div>
                                <div className="buy p-2">
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="ads pt-4">
                            <img src="./image/e-sewaad.png" className='w-100' alt="ads" />
                        </div>
                        <div className="popular-products mt-5">
                            <p><span>Popular Products</span></p>
                            <div className="products">
                                <div className="product/image">
                                    <img src="./image/product/samsung.jpg"
                                        alt="product" height={90} />
                                </div>
                                <div className="product-name pt-4">
                                    <h4>Samsung Galaxy A53</h4>
                                </div>
                            </div>
                            <div className="products">
                                <div className="product/image">
                                    <img src="./image/product/samsung.jpg"
                                        alt="product" height={90} />
                                </div>
                                <div className="product-name pt-4">
                                    <h4>Samsung Galaxy A53</h4>
                                </div>
                            </div>
                            <div className="products">
                                <div className="product/image">
                                    <img src="./image/product/samsung.jpg"
                                        alt="product" height={90} />
                                </div>
                                <div className="product-name pt-4">
                                    <h4>Samsung Galaxy A53</h4>
                                </div>
                            </div>
                            <div className="products">
                                <div className="product/image">
                                    <img src="./image/product/samsung.jpg"
                                        alt="product" height={90} />
                                </div>
                                <div className="product-name pt-4">
                                    <h4>Samsung Galaxy A53</h4>
                                </div>
                            </div>
                            <div className="products">
                                <div className="product/image">
                                    <img src="./image/product/samsung.jpg"
                                        alt="product" height={90} />
                                </div>
                                <div className="product-name pt-4">
                                    <h4>Samsung Galaxy A53</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="r-products">
                    <div className="realted-header pt-3 pb-4">
                        <h2>Related Products</h2>
                    </div>
                    <div className="related-product">
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
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Details