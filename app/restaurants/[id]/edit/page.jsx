"use client"

import { useState, useEffect } from "react"
import { getRestaurant } from "../../../../server/restaurantControllers";
import Loader from "../../../../components/Loader";

import Link from 'next/link'

export default function EditRestaurant({params}) {
    const [ restaurant, setRestaurant] = useState(null);
    useEffect(() => {
      getRestaurant(params.id).then(data => setRestaurant(data))
    }, []);
  
    console.log(restaurant)
  
    const retVal = restaurant ? (   <div className="container">
    <h1 className="form__title"> Edit Restaurant</h1>
    <form className="form" action="">
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
             <button className="btn btn__submit">Save Changes</button>
             <Link href={`/restaurants/${params.id}`} className="btn btn__negative">Cancel</Link>
         </div>
    </form>
 </div>) : <Loader/>
    return retVal;
}
