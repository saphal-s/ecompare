import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container fcontainer">
                <div className="copy">
                    <p>&copy; 2022 e-compare</p>
                </div>
                <div className="footer-nav">
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>For Advertisement</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer