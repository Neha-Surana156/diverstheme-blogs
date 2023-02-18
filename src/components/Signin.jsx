import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css";
import a1 from "../img/a1.jpg";

const Signin = () => {
  return (
    <>
     <section className='sign-in'>
        <div className="container mt-5">
          <div className="signin-content">

          <div className="signin-image">
                <figure>
                  <img src={a1} alt="Signin" />
                  <Link to="/signup" className='signup-image-link'>Create an Account</Link>
                </figure>
          </div>

            <div className="signin-form">
              <h2 className='form-title'>Sign in</h2>
              <form className='register-form'>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name='email' id='email' autoComplete='off' placeholder='Your Email' />
                </div>                
                
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name='password' id='password' autoComplete='off' placeholder='Your Password' />
                </div>               

                <div className="form-group form-button">
                  <input type="submit" name='signin' id='signin' className='form-submit' value="Log In" />
                </div>

              </form>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Signin
