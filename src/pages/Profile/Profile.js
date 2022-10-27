import React, { useContext } from 'react';
import Image from 'react-bootstrap/Image';
import { AuthContext } from '../../Context/AuthProvider';
import './Profile.css';
import Form from 'react-bootstrap/Form';
const Profile = () => {
    const { user } = useContext(AuthContext);
    return (

        <div>
            <div className='container profile'>
                <div className='card mx-auto mb-5' style={{ width: '30%' }}>
                    <div className='card-title mt-2'>
                        <Image src={user?.photoURL} style={{ width: '100%', height: '200px', objectFit: 'contain' }} roundedCircle></Image>

                    </div>
                    <div className='card-body text-center'>
                        <p>Name: {user?.displayName}</p>
                        <p>Email: {user?.email}</p>


                    </div>
                    
                    <div className='mx-auto'>
                        <button className='btn btn-dark w-100 mb-2' data-bs-toggle="modal" data-bs-target="#exampleModal">Update Profile</button>

                    </div>
                    
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog my-auto">
                            <div class="modal-header">
                                <h5 class="modal-title">Update Profile</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" style={{ color: 'red' }} aria-label="Close"></button>
                            </div>
                            <Form className='p-4' >
                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" type="email"  defaultValue={user.email} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name="name"  type="text" defaultValue={user.displayName} placeholder="Name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>photoURL</Form.Label>
                                    <Form.Control name="photoURL"  type="text" defaultValue={user.photoURL} placeholder="Name" />
                                </Form.Group>
                                <div className='justify-content-center d-flex'>
                                    <button className='btn btn-secondary w-50'>Update</button>
                                </div>


                            </Form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Profile;