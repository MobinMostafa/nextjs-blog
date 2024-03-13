import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({title,description,price,thumbnail,category,linkText,style,productText,imageWidth, imageHeight}) => {
  return (
 <div className="card" style={style}>
     <Image height={imageHeight} width={imageWidth} className="card-img-top" src={thumbnail} alt="Card image cap" /> 
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text fw-bolder">${price}</p>
        <p className="card-text fw-bold">{category}</p>
        <Link href={linkText} className='btn btn-outline-warning'>{productText}</Link>
    </div>
 </div>

  )
}

export default Card