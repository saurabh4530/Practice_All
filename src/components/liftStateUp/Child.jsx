import React, { useState } from "react";

function Child({ handleDataFromChild }) {
  const [cData, setCData] = useState({
    name: "",
    age: "",
    email: "",
  });
  const changeHandler = (e) => {
    setCData({ ...cData, [e.target.name]: e.target.value });
  };
  const sendDataToParent = () => {
    handleDataFromChild(cData);
  };

  return (
    <>
      <input
        type="text"
        placeholder="enter name"
        name="name"
        value={cData.name}
        onChange={changeHandler}
      />
      <input
        type="number"
        placeholder="enter age"
        name="age"
        value={cData.age}
        onChange={changeHandler}
      />
      <input
        type="email"
        placeholder="enter email"
        name="email"
        value={cData.email}
        onChange={changeHandler}
      />
      <button onClick={sendDataToParent}>send data</button>
    </>
  );
}

export default Child;
