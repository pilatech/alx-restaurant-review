'use server'
import { restaurants } from "./data"
import connectDB from "../db/connect";
import Restaurant from "../db/Models/Restaurant";

export const getRestaurants = async function(){
   await connectDB();
   const restaurants = await Restaurant.find({})
   return JSON.parse(JSON.stringify(restaurants));
}

export const addRestaurant = async function(previousState, currentState){
    // if not logged in, redirect to homepage
    // if not the owner, redirect to homepage
    // get the restaurant data
    // check the logged in user and add his/her ID as "owner"
    // add it to database
    // redirect to all restaurant
}

export const getRestaurant = async function(id){
    await connectDB();
    const foundRestaurant = await Restaurant.findOne({_id: id});
   console.log(foundRestaurant);
   return JSON.parse(JSON.stringify(foundRestaurant));
}

export const editRestaurant = async function(previousState, currentState){
    // if not logged in redirect to homepage
    //get restaurant by id -> inside hidden input
    // if not the owner, redirect to homepage
   // edit and save
   // redirect to the single restaurant
    console.log('editing')
}

export const deleteRestaurant = async function(id){
    // if not logged in redirect to homepage
    // if not the owner, redirect to homepage,
    console.log('deleting');
}

export const likeRestaurant = async function(userId, restaurantId){
    // if not logged in, redirect to homepage
    // if OWNER, redirect to same page
    const restaurant = await getRestaurant(restaurantId)
    if (restaurants.likes.includes(userId)){
        // remove userId
    } else {
        restaurants.likes.push(userId)
    }
    console.log('liking');
}