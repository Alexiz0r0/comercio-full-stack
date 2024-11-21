import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div>
      <div className='flex align-items-center justify-content-between flex-column h-screen'>
        <div className='flex flex-column align-items-center justify-content-center w-full md:w-5 h-full text-center py-6 px-4'>
          <div className='mb-6'>
            <svg
              height='56'
              viewBox='0 0 17 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0 0H6.00019V3.82345L17 1.66667V6.66667L6.00019 8.82345V10.4901L17 8.33333V13.3333L6.00019 15.4901V20H0V0Z'
                fill='url(#paint0_linear)'
              ></path>
              <defs>
                <linearGradient
                  id='paint0_linear'
                  x1='3.33335'
                  y1='3.08442e-08'
                  x2='8.49995'
                  y2='20'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stop-color='var(--primary-400)'></stop>
                  <stop offset='1' stop-color='var(--primary-700)'></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='flex flex-column w-full'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
