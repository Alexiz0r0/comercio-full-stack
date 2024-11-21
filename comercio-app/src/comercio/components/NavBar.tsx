import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const onHomeBtn = () => {
    navigate('/catalogo');
  };
  const onUserBtn = () => {
    navigate('/user');
  };
  const onToolBtn = () => {
    navigate('/factory');
  };
  const onSearchBtn = () => {
    navigate('/catalogo');
  };

  const startContent = (
    <svg height='32' viewBox='0 0 17 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
          <stop stopColor='var(--primary-400)'></stop>
          <stop offset='1' stopColor='var(--primary-700)'></stop>
        </linearGradient>
      </defs>
    </svg>
  );
  const centerContent = (
    <div className='flex flex-wrap align-items-center gap-3'>
      <button
        className='p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200'
        onClick={onHomeBtn}
      >
        <i className='pi pi-images text-2xl'></i>
      </button>
      <button
        className='p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200'
        onClick={onUserBtn}
      >
        <i className='pi pi-user text-2xl'></i>
      </button>
      <button
        className='p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200'
        onClick={onToolBtn}
      >
        <i className='pi pi-shop text-2xl'></i>
      </button>
      <button
        className='p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200'
        onClick={onSearchBtn}
      >
        <i className='pi pi-search text-2xl'></i>
      </button>
    </div>
  );

  const endContent = (
    <div className='flex align-items-center gap-2'>
      <Avatar
        image='https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png'
        shape='circle'
      />
      <span className='font-bold text-bluegray-50'>Amy Elsner</span>
    </div>
  );
  return (
    <div className='my-2'>
      <Toolbar
        start={startContent}
        center={centerContent}
        end={endContent}
        className='bg-gray-900 shadow-2 py-1 px-4 border-none'
        style={{
          borderRadius: '1.25rem',
        }}
      />
    </div>
  );
};

export default NavBar;
