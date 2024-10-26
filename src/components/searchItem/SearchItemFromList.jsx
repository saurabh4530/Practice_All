import React, { useState } from "react";

let items = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes"];

function SearchItemFromList() {
  const [searchItem, setSearchItem] = useState("");

  const searchHandler = (e) => {
    setSearchItem(e.target.value);
  };
  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(searchItem.toLowerCase());
  });

  return (
    <>
      <h1>Search item from list</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchItem}
        onChange={searchHandler}
      />
      <ul style={{ listStyle: "none" }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })
        ) : (
          <li>NO match found</li>
        )}
      </ul>
    </>
  );
}

export default SearchItemFromList;
