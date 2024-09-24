"use client"

import { useFormState, useFormStatus } from 'react-dom'
import { login } from '../../server/userControllers'

export default function LoginForm() {
    const [formState, formAction] = useFormState(login, {})
    console.log(formState)
  return (
<form className="form" action={formAction}>
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
  )
}
