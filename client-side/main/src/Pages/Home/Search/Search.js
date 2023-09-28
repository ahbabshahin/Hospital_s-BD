import React from 'react';

const Search = () => {
    return (
        <div className='mt-40 mb-40'>
            <h2 className='text-center font-bold text-2xl ml-20'>Search Here</h2>
           <div className='ml-80 '>
           <input type="text" placeholder="Type here" className="mt-7 ml-32 input input-bordered input-primary w-full max-w-lg" />
           </div>
        </div>
    );
};

export default Search;