"use client"

import { useEffect, useState } from 'react';
import { getRestaurants } from '../server/restaurantControllers';
import Loader from '../components/Loader';
import RestaurantCard from '../components/RestaurantCard';

export default function Page() {
    const [ restaurants, setRestaurants] = useState([])

    useEffect(
        () => {
         getRestaurants().then(data => {
            setRestaurants(data);
         })
        },
    []);

  return (
    <div className="container">
         <h1>Welcome to the restaurants. We can see featured Restaurants</h1>
      <div className="flex gap-2">
        {restaurants.length ? 
        restaurants.map((restaurant, index) => 
        <RestaurantCard key={index} restaurant={restaurant}/>
        ) : 
        <Loader/> }
      </div>
    </div>
  )
}
