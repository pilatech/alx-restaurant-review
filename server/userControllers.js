'use server'
import { restaurants } from "./data"

export const registerUser = async function(previousState, formData){
    const errors = {}
    const user = {
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password')
    }
    console.log(user)
    // do signup logic
}

export const login = async function(previousState, formData){
    const errors = {}
    const user = {
        username: formData.get('username'),
        password: formData.get('password')
    }
    console.log(user)
    // do login logic
}

export const logout = async function(){
    // if logged in
    // allow logout
    console.log('logout');
}