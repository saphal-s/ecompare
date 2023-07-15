import React from 'react';
import { Badge } from 'antd';
import { notification } from 'antd';
import { GoThreeBars } from 'react-icons/go';
import { FaHeart, FaUser } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosNotifications } from 'react-icons/io';
import './style.css';
import { Link } from 'react-router-dom';

const openNotificationWithIcon = (type) => {
    notification[type]({
        message: 'Notification Title',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
};

const Header = () => {
    return (
        <div className="navs">
            <div className="header">
                <div className="flex">
                    <div className="head">
                        <Link to="/"><h2>E-Compare</h2></Link>
                        <p>Join with us & save time !</p>
                    </div>
                    <div className="categories">
                        <GoThreeBars className='icon' />
                        <h4>Categories</h4>
                    </div>
                    <div className="col-4 ps-4">
                        <form>
                            <div className="search d-flex">
                                <input type="text" placeholder='Search products...' />
                                <button><AiOutlineSearch className='sicon' /></button>
                            </div>
                        </form>
                    </div>
                    <div className="favorites">
                        <div className="d-flex">
                            <FaHeart className='ficon' />
                            <p>My Favorities</p>
                        </div>
                    </div>
                    <div className="favorites">
                        <div className="d-flex">
                            <FaUser className='ficon' />
                            <p>Log in</p>
                        </div>
                    </div>
                    <div className="favorites">
                        <Badge count={5} onClick={() => openNotificationWithIcon('info')}>
                            <div className="d-flex mt-1">
                                <IoIosNotifications className='nicon' />
                                <p>Notification</p>
                            </div>
                        </Badge>
                    </div>
                </div>
            </div>
            <div className="trends">
                <div className="trending">
                    <h6>Trending Now :</h6>
                    <ul>
                        <li>iphone</li>
                        <li>Redmi Phones</li>
                        <li>Headphone</li>
                        <li>Realme</li>
                        <li>Dell</li>
                        <li>MSI</li>
                        <li>Monitor</li>
                        <li>Headphone</li>
                        <li>Realme</li>
                        <li>Dell</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header