import React from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Services from '../services/Services';
import Testimonial from './Testimonial/Testimonial';
import Search from '../Search/Search';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <Cards></Cards>
           <Services></Services>
           <Search></Search>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;