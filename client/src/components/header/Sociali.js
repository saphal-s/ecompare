import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram, FiYoutube } from 'react-icons/fi';

const Sociali = () => {
    return (
        <div className="social-icons">
            <div className="sicons">
                <div className="ficons">
                    <FaFacebookF className="ficon" />
                </div>
                <div className="iicons">
                    <FiInstagram className="iicon" />
                </div>
                <div className="yicons">
                    <FiYoutube className="yicon" />
                </div>
            </div>
        </div>
    )
}

export default Sociali