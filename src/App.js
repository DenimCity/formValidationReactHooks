/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import './styles.css'

import useFormValidation from './useFormValidation';
import validateAuth from './validateAuth';
// import firebase from './firebase';

const INITIAL_STATE = {
  email: '',
  password:''
}

const App = (props) => {

  const authenticateUser = async () => {
    const { email, password } = values;
    try {
      // await firebase.register(email, password)
    } catch(err){
      console.error('Auth error', err)
      setFireBaseError(err.message)
    }
  }
  const { 
    errors, 
    handleChange, 
    handleBlur, 
    handleSubmit, 
    isSubmitting, 
    values } = useFormValidation(INITIAL_STATE, validateAuth, authenticateUser)
    const [fireBaseError, setFireBaseError] = useState(null)

  return (
    <div className="container">
    <h1>Register Here</h1>
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        name="email"
        value={values.email}
        className={errors.email && 'errors-input'}
        autoComplete="off"
        placeholder="Your email address"
      />
      { errors.email && <p className='error-text'>{errors.email}</p>}
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        name="password"
        type="password"
        value={values.password}
        className={errors.password && 'errors-input'}
        placeholder="Choose a safe password"
      />
      { errors.password && <p className='error-text'>{errors.password}</p>}
      {fireBaseError && <p className='error-text'>{fireBaseError}</p>}
      <div>
        <button disabled={ isSubmitting } type="submit">Submit</button>
      </div>
    </form>
  </div>
  );
}

export default App;
