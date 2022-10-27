import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import './Checkout.css';

import toast from 'react-hot-toast';
const Checkout = () => {
    const checkoutCourse=useLoaderData();
    const {title,price,course_hours,instructor}=checkoutCourse;
    const {user}=useContext(AuthContext);
    const handleCheckout=()=>{
        toast.success('Congratulation! Welcome to Course!!!');
    }
    return (
        <div>
            <div className='container checkout'>
                <h4 className='text-center mb-4'>Checkout Page</h4>
                <div className='card w-50 mx-auto p-4 mb-5'>
                    <h6>User Name: <span className="ch" style={{marginLeft:'30px'}}>{user?.displayName}</span></h6>
                    <hr/>
                    <h6>User Email: <span className="ch"  style={{marginLeft:'30px'}}>{user?.email}</span></h6>
                    <hr/>
                    <h6>Course Name: <span className="ch"  style={{marginLeft:'10px'}}>{title}</span></h6>
                    <hr/>
                    <h6>Course Duration: <span className="ch"  style={{marginLeft:'280px'}}>{course_hours} hours</span></h6>
                    <hr/>
                    <h6>Course Price : <strong><span className="ch"  style={{marginLeft:'285px'}}>{price} Taka</span></strong></h6>
                    <hr/>
                    <h6>Total :<strong><span className="ch"  style={{marginLeft:'350px'}}>{price} Taka</span></strong></h6>

                    <button class="btn btn-secondary mt-3 w-50 mx-auto" onClick={handleCheckout}>Procced to Checkout</button>
                </div>

            </div>
            
        </div>
    );
};

export default Checkout;