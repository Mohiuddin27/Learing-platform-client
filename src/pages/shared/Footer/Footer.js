import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin, FaRegDotCircle, FaSearchLocation, FaPhoneAlt,FaEnvelopeOpenText } from "react-icons/fa";

const Footer = () => {
    const [categories, courseCategories] = useState([]);
    useEffect(() => {
        fetch('https://learning-platform-server-beige.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => courseCategories(data))
    }

        , [])
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div className='img'>
                            <Image src={logo} style={{ width: "150px", height: '100px' }}></Image>
                        </div>
                        <div className='icon'>
                            <FaFacebookF className='fa fs-2'></FaFacebookF>
                            <FaTwitter className='fa fs-2'></FaTwitter>
                            <FaYoutube className='fa fs-2'></FaYoutube>
                            <FaLinkedin className='fa fs-2'></FaLinkedin>
                        </div>

                    </div>
                    <div className="col-md-3 col-sm-12 text-light mt-2">
                        <h4>QUICK LINKS</h4>
                        <div className="footer-nav">
                            <h6><FaRegDotCircle className='me-2 r'></FaRegDotCircle> <Link to='/'>Home</Link></h6>
                            <h6> <FaRegDotCircle className='me-2 r'></FaRegDotCircle> <Link to='/courses'>Courses</Link></h6>
                            <h6><FaRegDotCircle className='me-2 r'></FaRegDotCircle> <Link to='/faq'>Faq</Link></h6>
                            <h6><FaRegDotCircle className='me-2 r'></FaRegDotCircle>  <Link to='/blog'>Blog</Link></h6>
                            <h6><FaRegDotCircle className='me-2 r'></FaRegDotCircle> <Link to='/login'>Login</Link></h6>
                            <h6><FaRegDotCircle className='me-2 r'></FaRegDotCircle> <Link to='/register'>Register</Link></h6>
                        </div>



                    </div>
                    <div className="col-md-3 col-sm-12 text-light mt-2">
                        <h4>COURSES</h4>
                        <div className="footer-nav">
                            {
                                categories.map((category,index) => <h6 key={index}><FaRegDotCircle className='me-2 r '></FaRegDotCircle> <Link to={`/category/${category.id}`}>{category.name}</Link></h6>)
                            }

                        </div>



                    </div>
                    <div className="col-md-3 col-sm-12 text-light mt-2">
                        <h4>GET IN TOUCH</h4>
                        <div className="footer-nav">
                            <p><FaSearchLocation className='me-2'></FaSearchLocation> House# 82, Road# 19/A, Block# E, Banani, Dhaka-1213</p>
                            <p><FaPhoneAlt className='me-2'></FaPhoneAlt>
                                +8801787659453
                               <div className='ms-4'>
                               +8801880196090
                                +8801880196092
                                +8801880818843
                               </div>
                            </p>
                            <p><FaEnvelopeOpenText className='me-2'></FaEnvelopeOpenText> hello@trycatchbd.com</p>
                        </div>



                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;