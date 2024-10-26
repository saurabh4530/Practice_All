//@ts-nocheck
import React, { useState } from 'react'

function SortItemFromList() {
    const [items,setItems]=useState([
        {id:4,name:'Milk', price:656},
        {id:1,name:'Apple', price:250},
        {id:3,name:'Pine', price:100},
        {id:2,name:'Banana', price:26},
    ]);
    const [isAscName,setIsAscName]=useState(true);
    const [isAscPrice,setIsAscPrice]=useState(true);

    const SortByName=()=>{
        const sortItems=[...items].sort((a,b)=>{
            if (isAscName) {
                return a.name.localeCompare(b.name)
                
            }else{
                return b.name.localeCompare(a.name)
            }
        })
        setItems(sortItems);
        setIsAscName(!isAscName)
        
        
    }
    const SortByPrice=()=>{
        const sortItems=[...items].sort((a,b)=>{
            if(isAscPrice){
                return a.price-b.price
            }else return b.price-a.price
        })

        
        setItems(sortItems)
        setIsAscPrice(!isAscPrice)
    }

  return (
 <>
 <h1>Sort Item from List</h1>
 <button onClick={SortByName}> Sort by name {isAscName?"Asc":"Desc"}</button>
 <button onClick={SortByPrice}> Sort by price {isAscPrice?"Asc":"Desc"}</button>
 <ul>

    {
        items.map((item,index)=>{
            return <li key={index}>{item.name}-{item.price}</li>
        })

    }
 </ul>
 
 
 
 </>
  )
}

export default SortItemFromList