import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { Password } from 'primereact/password';
import AuthLayout from '../layout/AuthLayout';
const LoginPage = () => {
  const [value, setValue] = useState<string>('');
  return (
    <AuthLayout>
      <div className='flex flex-column w-full'>
        <div className='flex flex-column text-left gap-2'>
          <label htmlFor='username'>Username</label>
          <InputText id='username' aria-describedby='username-help' />
          <small id='username-help'>Enter your username to reset your password.</small>
        </div>
        <div className='flex flex-column text-left gap-2'>
          <label htmlFor='password'>Password</label>
          <Password
            placeholder='Password'
            id='password'
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            feedback={false}
            toggleMask
          />
          <small id='password-help'>Enter your username to reset your password.</small>
        </div>
        <button
          aria-label='Log in'
          className='p-ripple w-full my-4 p-button p-component'
          data-pc-name='button'
          data-pc-section='root'
        >
          <span className='p-button-label p-c' data-pc-section='label'>
            Login
          </span>
        </button>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
