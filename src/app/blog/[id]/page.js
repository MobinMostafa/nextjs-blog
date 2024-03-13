import Card from '@/app/components/Card'
import React from 'react'

const blogDetail = async ({params}) => {
  const {id} = params
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  const product = await res.json()
  // console.log(resData)
  return (
    <div className="container d-flex justify-content-center align-items-center py-5">
      <Card style={{width:"50rem"}} imageWidth={500} imageHeight={400} title={product.title} description={product.description} thumbnail={product.thumbnail} price={product.price} category={product.category} productText={"product page"} linkText={`/blog`} />
    </div>
  )
}

export default blogDetail