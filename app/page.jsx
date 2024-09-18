"use client"

import { useEffect, useState } from 'react';
import { getRestaurants } from '../server/restaurantControllers';
import Link from 'next/link';

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
    <>
        <h1>Welcome to the restaurants. We can see featured Restaurants</h1>
        {restaurants.map((restaurant, index) => {
            return (
                <div key={index}>
                    <Link href={`restaurants/${restaurant}`}> Restaurant {restaurant}</Link>
                    &nbsp; <button>Like</button>
                </div>
            )
        })}
    </>
  )
}
