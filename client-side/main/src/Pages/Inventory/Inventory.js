import React from 'react';
import img from '../../Asset/hospital-building.avif'
import { Link } from 'react-router-dom';

const Inventory = () => {
    return (
        <div>
            <h1 className='text-4xl text-primary text-center font-bold'> Inventory page</h1>
            <div className='grid  grid-cols-3 gap-4 mt-10'>
                {/* col-1  */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: IBNA SINHA HOSPITAL</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit autem id minima saepe rem minus ad dicta dolor?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"> <Link to="/appointment">Appointment</Link></button>
                        <button className="btn btn-primary"><Link to="https://ibnsinahospitalsylhet.com.bd/our-consultants.php">Hospital Link</Link></button>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary"> <Link to="/service">Services</Link></button>                        
                    </div>
                </div>
            </div>
                {/* col-2  */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: IBNA SINHA HOSPITAL</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit autem id minima saepe rem minus ad dicta dolor?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"> <Link to="/appointment">Appointment</Link></button>
                        <button className="btn btn-primary"><Link to="https://ibnsinahospitalsylhet.com.bd/our-consultants.php">Hospital Link</Link></button>
                    </div>
                </div>
            </div>
                {/* col-3 */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: IBNA SINHA HOSPITAL</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit autem id minima saepe rem minus ad dicta dolor?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"> <Link to="/appointment">Appointment</Link></button>
                        <button className="btn btn-primary"><Link to="https://ibnsinahospitalsylhet.com.bd/our-consultants.php">Hospital Link</Link></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Inventory;