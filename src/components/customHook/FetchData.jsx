import React from "react";
import UseFetch from "./UseFetch";

function FetchData() {
  const { data, loading, error } = UseFetch(
    "https://fakestoreapi.com/products"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error....try after sometime</p>;
  return (
    <>
      <h1>Products</h1>
      <div>
        {
          //@ts-expect-error
          data.map((product , index) => {
            return (
              
                <div key={index}>
                  <h2>title:{product.title}</h2>
                  <img src={product.image} alt="product img" />
                  <h3> category:{product.category}</h3>
                  <h3>price :{product.price}</h3>
                  <h3>rating{product?.rating?.rate}</h3>
                </div>
              
            );
          })
        }
      </div>
    </>
  );
}

export default FetchData;
