import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F2EEE8] text-center px-4">
      <div className="text-6xl font-bold text-[#383A41] mb-4">404</div>

      <div className="w-24 h-24 bg-white border-4 border-[#383A41] rounded-lg flex flex-col items-center justify-center mb-6">
        <div className="w-16 h-3 flex flex-col">
          <div className="flex-1 bg-[#EB6D6D]"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-[#5E7FDC]"></div>
        </div>
        <div className="flex justify-between w-12 mt-2">
          <div className="w-4 h-2 border-[3px] border-[#383A41] border-b-0 rounded-t-md"></div>
          <div className="w-4 h-2 border-[3px] border-[#383A41] border-b-0 rounded-t-md"></div>
        </div>
        <div className="w-6 h-1 bg-[#383A41] rounded mt-2"></div>
      </div>

      <h1 className="text-xl font-semibold text-[#383A41] mb-6">
        Oops! Page Not Found
      </h1>

      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-[#5E7FDC] text-white rounded-md hover:bg-[#5E7FDC]/80 transition w-full max-w-xs"
      >
        Return to Home
      </button>
    </div>
  );
};

export default NotFound;
