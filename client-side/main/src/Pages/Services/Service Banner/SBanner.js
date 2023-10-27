import React from 'react';
import banner from '../../../Asset/hospital-building.avif'

const SBanner = () => {
    return (
        <div>
              <div className=" banner hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold w-80 ml-20 text-black">IBNA SINHA HOSPITAL LTD</h1>
            <p className="mb-5 w-3/6 ml-20 text-black font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatum commodi repellat blanditiis perferendis iusto fugit ab modi, veritatis pariatur nulla sequi reprehenderit, sed deserunt vitae culpa magnam?</p>
            {/* <button className="pl-10 pr-10 btn text-white bg-gradient-to-r from-yellow-600 to-black hover:from-black hover:to-yellow-500 ... ml-20"><a href="#menu">Explore Menu</a></button> */}
          </div>
        </div>
      </div>
        </div>
    );
};

export default SBanner;