
import React from "react";
import Card from "../components/Card";


const blog = async () => {
       const fetchData = await fetch("https://dummyjson.com/products", {cache: "no-store"});    
       const productData = await fetchData.json();
       const data = productData.products
        // console.log(data)
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center py-5">
      <h2 className="display-4 mb-4">Blog</h2>
      <div className="row">
      {
        data.map( (product) => 
         (<div className="col-md-3 mb-2 d-flex justify-content-center" key={product.id} > 
          <Card title={product.title} description={product.description} thumbnail={product.thumbnail} price={product.price} category={product.category} id={product.id} />
        </div>
        ))
      }
      </div>
    </div>
  );
};

export default blog;
