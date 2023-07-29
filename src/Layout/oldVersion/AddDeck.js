import React, { useState } from "react";

function AddDeck({ deckData, setDeckData, addDeck}) {
  const num = deckData.length + 1;
  const initialData = {
    id: num,
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialData);
  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    addDeck(formData);
  };


  // function submitHandler(event){
  //     event.preventDefault();
  //     setDeckData({...deckData, formData})
  // }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={changeHandler}
          />
        </label>
        <label>
          Description
          <textarea
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={changeHandler}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddDeck;
