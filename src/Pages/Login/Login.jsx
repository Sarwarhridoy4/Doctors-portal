import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const handelLogin = data => {
    console.log(data);
    
  }
  return (
    <div className='w-96 p-7 mx-auto'>
      <h4 className='text-xl text-center'>LogIn</h4>
      <div className='h-800px flex justify-center items-center my-10'>
        <form onSubmit={handleSubmit(handelLogin)}>
          <div className='form-control w-full max-w-xs grid grid-cols-1 gap-4'>
            <label className='label'>
              <span className='label-text'>Your Email</span>
            </label>
            <input
              type='email'
              {...register("email",{ required: "Email is must needed" })}
              className='input input-bordered w-full'
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}

            <label className='label'>
            <span className='label-text'>Your Password</span>
            </label>
            <input
              type='password'
              {...register("password",{ required: "Provide password" })}
              className='input input-bordered w-full'
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}

            <label className='label'>
              <span className='label-text'><Link to ='/'>Forgot Password?</Link></span>
            </label>
            <input
              type='submit'
              className='btn btn-outline btn-accent w-full'
            />
            <p className='text-center'>
              New to Doctors Portal?
              <Link to='/signup'>
                <span className='text-primary'>Create new account</span>
              </Link>
            </p>
            <div className='divider'>OR</div>
            <button className='btn btn-active btn-outline'>Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
