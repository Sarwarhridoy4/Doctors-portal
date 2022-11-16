import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const handelRegister = data => {
    console.log(data);
    
  }

  return (
    <div>
      <h4 className='text-4xl text-center'>SignUp</h4>
      <div className='h-800px flex justify-center items-center my-10'>
        <form onSubmit={handleSubmit(handelRegister)}>
          <div className='form-control w-full max-w-xs grid grid-cols-1 gap-4'>
            <label className='label'>
              <span className='label-text'>Your Name</span>
            </label>
            <input
              type='text'
              
              {...register("name",{ required: "Provide Your Name" })}
              className='input input-bordered w-full'
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.password && <p className="text-red-600" role="alert">{errors.name?.message}</p>}
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

            <input
              type='submit'
              className='btn btn-outline btn-accent w-full'
            />
            <p className='text-center'>
            Already have an account?
              <Link to='/login'>
                <span className='text-primary'>SignIn</span>
              </Link>
            </p>
            <div className='divider'>OR</div>
            <button className='btn btn-active btn-primary'>Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
