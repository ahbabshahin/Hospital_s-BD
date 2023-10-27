import React from 'react';
import ambulance from '../../../Asset/ambulance.avif'

const Ambulance = () => {
    return (
        <div>
              <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={ambulance} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
            <div>
                <h1 className=" text-2xl font-semibold">Ambulance service: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, minus.</h1>
                <p className="text-5xl py-6 font-bold">contact : 90978656, Uposhahar, Sylhet</p>
                {/* <PrimaryButton>Getting Started</PrimaryButton> */}
            </div>
        </div>
    </div>
        </div>
    );
};

export default Ambulance;