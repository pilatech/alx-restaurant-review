import Link from 'next/link'

export default function EditRestaurant({params}) {
  return (
    <div>Editing Restaurant - {params.id} <Link href={`/restaurants/${params.id}`}>Cancel</Link>
    <br/>
    <button>Save</button>
    <button>Delete restaurant</button>
    </div>
  )
}
