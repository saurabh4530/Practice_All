//@ts-nocheck
import { useEffect, useState } from "react";

function HigherOrder(title, Component, request) {
   
  return function HOC() {
    const [data, setData] = useState([]);
    const getUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${request}`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      getUser();
    }, [request]);
    return (
      <>
        <h1>{title}</h1>
        <Component data={data} />
      </>
    );
  };
}

export default HigherOrder;
