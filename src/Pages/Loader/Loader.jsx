import React from "react";
import './Loader.css'
const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className='loader'>
        <div className='scanner'>
          <span>Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
