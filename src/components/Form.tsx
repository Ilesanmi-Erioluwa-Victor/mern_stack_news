'use client';

import React, { useState } from 'react';

type DataProps = {
  name: string;
  email: string;
  password: string;
  success: boolean;
  error: boolean;
  buttonText: string;
};
const Form = (): JSX.Element => {
  const [data, setData] = useState<DataProps>({
    name: '',
    email: '',
    password: '',
    success: false,
    error: false,
    buttonText: 'Register',
  });

//   const handleInputChange = (e: any) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setData({ ...data, [name]: value.trim() });
//   };

  const handleInputChange = (name: string) =>(ev:any) => {
    setData({ ...data, [name]: ev.target.value.trim() });
  };
    const handleSubmit = (ev:any) => {
        ev.preventDefault();
        console.log(data)
     
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className='form-group'>
        <label
          htmlFor='name'
          className='fs-4 pb-2'
        >
          Name
        </label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter your Name'
          onChange={handleInputChange("name")}
        //   name='name'
        //   value={data.name}
        />
      </fieldset>

      <fieldset className='form-group'>
        <label
          htmlFor='email'
          className='fs-4 pb-2'
        >
          Email
        </label>
        <input
          type='email'
          className='form-control'
          placeholder='Enter your Email'
          onChange={handleInputChange("email")}
        //   name='email'
        //   value={data.email}
        />
      </fieldset>

      <fieldset className='form-group'>
        <label
          htmlFor='password'
          className='fs-4 pb-2'
        >
          Password
        </label>
        <input
          type='password'
          className='form-control'
          placeholder='Enter your password '
        //   name='password'
        //   value={data.password}
          onChange={handleInputChange("password")}
        />
      </fieldset>

      <div className='form-group'>
        <button className='btn btn-outline-warning fs-4'>Register</button>
      </div>
    </form>
  );
};

export default Form;
