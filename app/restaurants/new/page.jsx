import React from 'react'

export default function AddRestaurant() {
  return (
    <div className="container">
       <h1 className="form__title"> Add New Restaurant</h1>
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
                <button className="btn btn__submit">Create Restaurant</button>
            </div>
       </form>
    </div>
  )
}
