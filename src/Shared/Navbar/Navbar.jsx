import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handelLogout = () => {

    logOut()
      .then(() => {
        toast.success('User Logged Out')
       })
    .catch(error=>console.log(error))
  }
  const menuItems = (
    <React.Fragment>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/appointment'>Appointment</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/review'>Review</NavLink>
      </li>
      <li>
        <NavLink to='/dashboard'>Dashboard</NavLink>
      </li>
      {!user?.uid ?
        <li>
        <NavLink to='/login'>Login</NavLink>
      </li>:<li onClick={handelLogout}><Link>Logout</Link></li>
    }
    </React.Fragment>
  );
  return (
    <div className='navbar bg-base-100 flex justify-between'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {menuItems}
          </ul>
        </div>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          Doctors Portal
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>
          {menuItems}
        </ul>
      </div>
      <div className='navbar-end'>
        <h4 className="text-xl hidden md:block">{user?.displayName}</h4>
      </div>
    </div>
  );
};

export default Navbar;
