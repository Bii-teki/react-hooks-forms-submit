import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
 
  const [userData, setUserData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
    console.log(firstName)
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault()
    const dataFromForm = { firstName: firstName, lastName: lastName };
    const itemsToDisplay = [...userData, dataFromForm];
    setUserData(itemsToDisplay);
    setFirstName("");
    setLastName("");
    
  }
  const listOfItems = userData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <h3>{listOfItems}</h3>
    </div>
  );
}

export default Form;
