import Link from "next/link"
export default function Page({ params}) {
  return (
    <p>
        This is the restaurant: {params.id}
        <br/>
        <Link href={`/restaurants/${params.id}/edit`}>Edit Restaurant</Link>
        <br/>
        <Link href="/restaurants">Get Back To Restaurants</Link>
        <br/>
        <button>Like restaurant</button>
        <br/>
        <button>Delete Restaurant</button>
    </p>
  )
}
