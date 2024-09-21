import React from 'react'

export default function Login() {
  return (
    <div className="container">
       <h1 className="form__title"> Login To Review or Add Restaurants</h1>
       <form className="form" action="">
            <div className="input__group">
                <label className="input__label" htmlFor="username">Username</label>
                <input className="input" type="text" id="username" name="username"/>
            </div>
            <div className="input__group">
                <label className="input__label" htmlFor="password">Password</label>
                <input className="input" type="password" id="password" name="password"/>
            </div>
            <div className="input__group">
                <button className="btn btn__submit">Login</button>
            </div>
       </form>
    </div>
  )
}
