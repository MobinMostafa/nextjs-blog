import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({title,description,price,thumbnail,category, id}) => {
  return (
 <div className="card" style={{width: '18rem'}}>
     <Image height={160} width={100} className="card-img-top" src={thumbnail} alt="Card image cap" /> 
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary me-2">$ {price}</a>
        <a href="#" className="btn btn-primary">{category}</a>
        <Link href={`/blog/${id}`} className='btn btn-outline-warning'>Product details</Link>
    </div>
 </div>

  )
}

export default Card