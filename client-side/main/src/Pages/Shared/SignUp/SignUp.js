import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import img from '../../../Asset/login-logo.jpg'

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className='h-[800px] flex justify-center items-center'>
             <div className='w-[450px] mr-32'>
            <img src={img} alt="" />
        </div>

        <div className='w-96 p-7  border-2'>
            <h2 className='text-xl text-center'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type="password" {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be 6 characters long" },
                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
            </form>
            <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
            {/* <div className="divider">OR</div>
            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button> */}

        </div>
    </div>
    );
};

export default SignUp;