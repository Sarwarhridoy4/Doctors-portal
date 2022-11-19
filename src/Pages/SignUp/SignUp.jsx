import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const googleProvider = new GoogleAuthProvider();

  const handelRegister = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User created Successfully!");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            navigate('/')
          })
          .catch((error) => console.log(error));
        toast("User created successful!");
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message);
      });
  };

  //google signin
  const handelGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast(`authenticated as ${user?.displayName}`);
        Navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
        toast(error.message);
      });
  };

  return (
    <div className='mx-auto'>
      <h4 className='text-4xl text-center'>SignUp</h4>
      <div className='h-800px flex justify-center items-center my-10'>
        <form onSubmit={handleSubmit(handelRegister)}>
          <div className='form-control w-full max-w-xs grid grid-cols-1 gap-4'>
            <label className='label'>
              <span className='label-text'>Your Name</span>
            </label>
            <input
              type='text'
              {...register("name", { required: "Provide Your Name" })}
              className='input input-bordered w-full'
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.password && (
              <p className='text-red-600' role='alert'>
                {errors.name?.message}
              </p>
            )}
            <label className='label'>
              <span className='label-text'>Your Email</span>
            </label>
            <input
              type='email'
              {...register("email", { required: "Email is must needed" })}
              className='input input-bordered w-full'
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className='text-red-600' role='alert'>
                {errors.email?.message}
              </p>
            )}

            <label className='label'>
              <span className='label-text'>Your Password</span>
            </label>
            <input
              type='password'
              {...register("password", {
                required: "Provide password",
                minLength: { value: 6, message: "Atleast 6 carecter needed" },
              })}
              className='input input-bordered w-full'
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <p className='text-red-600' role='alert'>
                {errors.password?.message}
              </p>
            )}

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
            <button
              className='btn btn-active btn-primary'
              onClick={handelGoogleSignIn}
            >
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
