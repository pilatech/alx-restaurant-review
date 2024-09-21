import React, { useState } from 'react'
import { IoHeartSharp, IoLocationSharp, IoPerson } from "react-icons/io5";
import Link from 'next/link'
import Image from 'next/image'
import LikeButton from '../LikeButton'
import './restaurantCard.css'

export default function RestaurantCard({ restaurant, single}) {
  const [liked, setLiked] = useState(false);
  return (
      <div className="card container" style={single && {
        display: 'flex',
        padding: 0,
        width: '100%',
      }}>
          <div className="card__hero" style={single && {
            width: '50%'
          }}>
            <Image
              src="/restaurant.jpg"
              width={300}
              height={300}
              alt="Picture of the author"
            />
          </div>
        <div className="card__content">
          <h3 className="card__title">{restaurant.title} {single && <Link href={`/restaurants/${restaurant.id}/edit`} className="card__link"> ( Edit )</Link>}</h3>
        <p className="card__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem omnis placeat tenetur libero aperiam, ducimus magnam dignissimos sapiente officiis consectetur corrupti eligendi hic illum sit sint voluptates nisi temporibus.</p>
          {single ? 
          (<div className="card__stats">
            <p><IoHeartSharp/> 100</p>
            <p><IoLocationSharp/> Some Location</p>
            <p><IoPerson/> John Doe</p>
          </div>) : 
          <Link href={`/restaurants/${restaurant.id}`} className="card__link"> View Restaurant</Link>}
        </div>
          <LikeButton liked={liked} setLiked={setLiked}/>
      </div>
  )
}
