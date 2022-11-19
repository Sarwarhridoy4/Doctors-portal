import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn, googleSignIn } = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider();
  const [loginError, setloginError] = useState('')
  const locaton = useLocation()
  const navigate = useNavigate()
  const from = locaton.state?.from?.pathname || '/';
  const handelLogin = data => {
    console.log(data);
    setloginError('')
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user
        toast.success('User login Successfully!')
        console.log(user); 
        navigate(from,{replace:true})
      }).catch(error => {
        console.error(error)
        setloginError(error.message)
      })
    
  }
  //google signin
  const handelGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast(`authenticated as ${user?.displayName}`)
        navigate("/");
       
      })
      .catch((error) => {
        console.error(error.message);
        toast(error.message)
      });
  };
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
              {...register("email",{ required: "Email is must needed"  })}
              className='input input-bordered w-full'
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}

            <label className='label'>
            <span className='label-text'>Your Password</span>
            </label>
            <input
              type='password'
              {...register("password",{ required: "Provide password",minLength:{value:6, message:'Atleast 6 carecter needed'}})}
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
            <button className='btn btn-active btn-outline' onClick={handelGoogleSignIn}>Google</button>
          </div>
          <div>
            {
              loginError && toast.error(loginError)
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
