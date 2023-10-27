import React from 'react';
import img from '../../../Asset/reserved.jpg';
import './Appointment.css'

const Appointment = () => {
    return (
        <div className='reservation'>
            <div className='res-img'>
                <img src={img} alt="" />
            </div>
            <div className='res-info'>
                <form className="card-body">
                    <div className='name'>
                        <div className="form-control" id='firstname'>
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            {/* <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    
                    */}

                            <select className="select select-primary w-full max-w-xs mt-8">
                                <option disabled selected>Select The District</option>
                                <option>Sylhet</option>
                                <option>Dhaka</option>
                                <option>Rongpur</option>
                                <option>Chittagonj</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" name='email' placeholder="Phone Number" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date and Time</span>
                        </label>
                        <input type="text" name='password' placeholder="date and time" className="input input-bordered" required />

                    </div>
                    <div className=" ml-10 form-control">
                        {/* <label className="label">
                            <span className="label-text">Person</span>
                        </label>
                        <input type="text" name='password' placeholder="person" className="input input-bordered" required /> */}

                        <select className="select select-primary w-full max-w-xs mt-8">
                            <option disabled selected>Select The Hospital</option>
                            <option>Sylhet</option>
                            <option>Dhaka</option>
                            <option>Rongpur</option>
                            <option>Chittagonj</option>
                        </select>



                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Special Request</span>
                        </label>
                        <input type="text" name='password' placeholder="Special request" className="input input-bordered" required />

                    </div> */}
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Appointment;