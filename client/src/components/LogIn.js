import React from 'react'
import { NavLink } from 'react-router-dom'

const LogIn = () => {
  return (
    <>
      <section className='sign-in'>
        <div className="container mt-5">
          <div className="sign-in-content">
            <div className="sign-in-form">
              <h2 className="form-title">Sign in</h2>
              <form className='register-form' id="register-form">

                <div className="form-group">
                  {/* <label htmlFor="name"></label> */}
                  <input type="text" name="email" id="email" autoComplete='off' placeholder='Your email' />
                </div>


                <div className="form-group">
                  {/* <label htmlFor="name"></label> */}
                  <input type="password" name="password" id="password" autoComplete='off' placeholder='password' />
                </div>

                <div className="form-group form-button">
                  <input type="submit" name="sign-in" id="sign-in" className='form-submit' value="LogIn" />
                </div>

                <div className="sign-in-image">
                  <NavLink to="/LogIn" className="sign-in-image-link">I am already register</NavLink>
                </div>
              </form>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default LogIn
