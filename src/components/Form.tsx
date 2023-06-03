'use client';
import React, { useState } from 'react';
import axios from "axios";


type DataProps = {
  name: string;
  email: string;
  password: string;
  success ? : string;
  error ? : string;
  buttonText ?: string;
};
const Form = (): JSX.Element => {
  const [data, setData] = useState<DataProps>({
    name: '',
    email: '',
    password: '',
    success: "",
    error: "",
    buttonText: 'Register',
  });

  //   const handleInputChange = (e: any) => {
  //     const name = e.target.name;
  //     const value = e.target.value;
  //     setData({ ...data, [name]: value.trim() });
  //   };

    const {name, password, email, success, error, buttonText } = data;
  const handleInputChange = (name: string) => (ev: any) => {
    setData({ ...data, [name]: ev.target.value.trim(), error : "", success : "", buttonText : "Register" });
  };
  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    console.log(data);
    setData({
      name: '',
      email: '',
        password: ''
    });
  };
    return (
      <>
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
              onChange={handleInputChange('name')}
              value={name}
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
              onChange={handleInputChange('email')}
              value={email}
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
              value={password}
              onChange={handleInputChange('password')}
            />
          </fieldset>

          <div className='form-group'>
            <button className='btn btn-outline-warning btn-lg fs-4' type='submit'>
              {buttonText}
            </button>
          </div>
        </form>
        <div>{JSON.stringify(data)}</div>
      </>
    );
};

export default Form;
