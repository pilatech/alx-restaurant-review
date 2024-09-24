import React from 'react'
import { registerUser } from '../../server/userControllers'
import { useFormState, useFormStatus } from 'react-dom'

export default function RegistrationForm() {
    const [formData, registerAction] = useFormState(registerUser, {})
  return (
    <form className="form" action={registerAction}>
        <div className="input__group">
            <label className="input__label" htmlFor="username">Username</label>
            <input className="input" type="text" id="username" name="username"/>
        </div>
        <div className="input__group">
            <label className="input__label" htmlFor="email">Email</label>
            <input className="input" type="email" id="email" name="email"/>
        </div>
        <div className="input__group">
            <label className="input__label" htmlFor="password">Password</label>
            <input className="input" type="password" id="password" name="password"/>
        </div>
        <div className="input__group">
            <button className="btn btn__submit">Register</button>
        </div>
    </form>
  )
}
