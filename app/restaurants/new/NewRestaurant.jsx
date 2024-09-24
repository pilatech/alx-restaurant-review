"use client"
import { useFormState, useFormStatus} from 'react-dom'
import { addRestaurant } from '../../../server/restaurantControllers'


export default function NewRestaurant() {
    const [formData, formAction] = useFormState(addRestaurant, {});
    console.log(formData)
  return (
    <form className="form" action={formAction}>
    <div className="input__group">
        <label className="input__label" htmlFor="title">Title</label>
        <input className="input" type="text" id="title" name="title"/>
    </div>
    <div className="input__group">
        <label className="input__label" htmlFor="location">Location</label>
        <input className="input" type="text" id="location" name="location"/>
    </div>
    <div className="input__group">
        <label className="input__label" htmlFor="description">Description</label>
        <textarea className="input" type="text" id="description" name="description"/>
    </div>
   
    <div className="input__group">
        <button className="btn btn__submit">Create Restaurant</button>
    </div>
</form>
  )
}
