'use server'
import { restaurants } from "./data"
export const getRestaurants = async function(){
    return restaurants
}

export const getRestaurant = async function(id){
   const foundRestaurant = restaurants.find(restaurant => id === restaurant.id);
   console.log(foundRestaurant);
   return foundRestaurant;
}

export const editRestaurant = async function(id){
    console.log('editing')
}

export const deleteRestaurant = async function(id){
    console.log('deleting');
}

export const likeRestaurant = async function(id){
    console.log('liking');
}