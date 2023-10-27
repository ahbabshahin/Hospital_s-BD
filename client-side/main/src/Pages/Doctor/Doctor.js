import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Asset/people1.png'

const Doctor = () => {
    return (
        <div className='grid  grid-cols-3 gap-4 mt-10'>

        {/* c1 -  */}
         <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Department Of Cardiology</h2>
          <h3 className='font-semibold'>Name : Ahbab Shahin</h3>
          <p>Speacialist in : Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa quas eligendi placeat fuga eveniet nam, natus explicabo alias itaque.</p>
          <div className="card-actions">
            <button className="btn btn-primary "> <Link to="/appointment">Appointment</Link></button>
          </div>
        </div>
      </div>
        {/* c2 -  */}
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Department Of Cardiology</h2>
          <h3 className='font-semibold'>Name : Ahbab Shahin</h3>
          <p>Speacialist in : Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa quas eligendi placeat fuga eveniet nam, natus explicabo alias itaque.</p>
          <div className="card-actions">
            <button className="btn btn-primary "> <Link to="/appointment">Appointment</Link></button>
          </div>
        </div>
      </div>
        {/* c3 -  */}
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Department Of Cardiology</h2>
          <h3 className='font-semibold'>Name : Ahbab Shahin</h3>
          <p>Speacialist in : Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa quas eligendi placeat fuga eveniet nam, natus explicabo alias itaque.</p>
          <div className="card-actions">
            <button className="btn btn-primary "> <Link to="/appointment">Appointment</Link></button>
          </div>
        </div>
      </div>
       
     
        
        



       </div>
    );
};

export default Doctor;