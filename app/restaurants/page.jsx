"use client"

import { useEffect, useState } from 'react';
import { getRestaurants } from '../../server/restaurantControllers';
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
        <h1>All Your Restaurants</h1>
        {restaurants.map((restaurant, index) => {
            return (
                <div key={index}>
                    <Link href={`restaurants/${restaurant}`}> Restaurant {restaurant}</Link>
                    &nbsp; <button>Like</button>
                </div>
            )
        })}
        <br/>
        <Link href="/restaurants/new">Add New</Link>
    </>
  )
}
