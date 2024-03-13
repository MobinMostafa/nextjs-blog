import React from 'react'
import Link from 'next/link'

const productPage = async ({params}) => {
    const {id} = params
        let productList = await fetch(`https://fakestoreapi.com/products/${id}`);
        let product = await productList.json()
        // console.log(product)
  
  return (
    <div className="container py-5">
         <h2 className='text-center mb-4'>Product details</h2>
        <div className="row d-flex justify-content-center">
        <div className="col-md-6 mb-2 d-flex justify-content-center">
                <div className="card" style={{width: "100%"}}>
                  <div className="card-header">
                  <img className="img-fluid" src={product.image} alt="Card image cap" /> 
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">${product.price}</p>
                    <Link href='/products' className='btn btn-outline-warning'>product page</Link>
                  </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default productPage