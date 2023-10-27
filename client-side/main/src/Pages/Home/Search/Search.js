import React from 'react';

const Search = () => {
    return (
        <div className='mt-40 mb-40 flex'>
            {/* <h2 className='text-center font-bold text-2xl pl-40'>Search Here</h2> */}

           <div className=''>
           <input type="text" placeholder="Type here" className="mt-7 ml-32 input input-bordered input-primary w-full max-w-lg" />
           </div>

           <div className="form-control mt-7 ml-40">
                        <input className="btn btn-primary" type="submit" value="Submit" />
                    </div>
        </div>
    );
};

export default Search;