"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { getRestaurant } from "../../../server/restaurantControllers";
import Loader from "../../../components/Loader";
import RestaurantCard from "../../../components/RestaurantCard";

export default function Page({ params}) {
  const [ restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurant(params.id).then(data => setRestaurant(data))
  }, []);

  console.log(restaurant)

  const retVal = restaurant ? <RestaurantCard single={true} restaurant={restaurant}/> : <Loader/>
  return retVal;
}
