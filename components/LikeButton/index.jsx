import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

export default function LikeButton({ liked, setLiked }) {
  return (
    <button onClick={() => {
        setLiked(prev => !prev)
    }} className="card__like like-button">
        {liked ? <IoHeartSharp/> : <IoHeartOutline/>}
    </button>
  )
}
