import React from 'react';

const Form = (): JSX.Element => {
  return (
    <form>
      <fieldset className='form-group'>
        <label
          htmlFor='name'
          className='text-lg'
        >
          Name
        </label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter your Name'
        />
      </fieldset>

      <fieldset className='form-group'>
        <label
          htmlFor='email'
          className='text-lg'
        >
          Email
        </label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter your Email'
        />
      </fieldset>

      <fieldset className='form-group'>
        <label
          htmlFor='password'
          className='text-lg'
        >
          Password
        </label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter your password '
        />
      </fieldset>

      <div className='form-group'>
        <button className="btn btn-outline-warning">Register</button>
      </div>
    </form>
  );
};

export default Form;
