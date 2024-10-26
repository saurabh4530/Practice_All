import React, { useEffect, useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    <h1>loading............</h1>
    
  }
  return (
    <>
      {data.map((item, index) => {
        return (
          <>
            <li>{item.title}</li>
            <img src={item.image} alt={item.title} />
            <li>{item.description}</li>
            <li>{item.price}</li>
          </>
        );
      })}
    </>
  );
}

export default Fetch;
