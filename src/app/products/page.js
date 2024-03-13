"use client"
import { useEffect, useState} from "react"
import Link from 'next/link'

const Product = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    let productList = await fetch("https://fakestoreapi.com/products");
    let product = await productList.json()
    setProducts(product)
    // console.log(product)
  }
   useEffect(() => {
       fetchProducts()
   },[])

  return (
    <div className="container">
      <div className="row py-5">
      <h2 className="text-center mb-4">All products</h2>
{
        products.map((product) => (
              <div className="col-md-3 mb-2 d-flex justify-content-center" key={product.id}>
                <div className="card">
                  <div className="card-header">
                  <img height="160" width="100" className="card-img-top" src={product.image} alt="Card image cap" /> 
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description.substring(0,150)}</p>
                    <p className="card-text">${product.price}</p>
                    <Link href={`/products/${product.id}`} className='btn btn-outline-warning'>product detail</Link>
                  </div>
                </div>
              </div>
          )) 
        } 
      </div>
    </div>
  )
}

export default Product