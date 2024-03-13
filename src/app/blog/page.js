
import React from "react";
import Card from "../components/Card";


const blog = async () => {
       const fetchData = await fetch("https://dummyjson.com/products");    
       const productData = await fetchData.json();
       const data = productData.products
        // console.log(data)
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center py-5">
      <h2 className="display-4 mb-4">Blog</h2>
      <div className="row">
      {
        data.map( (product) => 
         (<div className="col-md-3 mb-4 d-flex justify-content-center" key={product.id} > 
          <Card style={{width: '18rem'}}
          imageWidth={100} imageHeight={160} title={product.title} description={product.description} thumbnail={product.thumbnail} price={product.price} category={product.category}  productText={"Product details"} linkText={`/blog/${product.id}`} />
        </div>
        ))
      }
      </div>
    </div>
  );
};

export default blog;
