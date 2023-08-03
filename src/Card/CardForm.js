import React, { useState } from "react";

function CardForm({
  initialFormData,
  submitHandler,
  history,
  url,
  header,
  buttonOnLeft,
  buttonOnRight
}) {
  const [formData, setFormData] = useState(initialFormData);

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    submitHandler(formData);
    setFormData(initialFormData);
  }

  return (
    <div>
      <h1>{header}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="front" className="form-label">
            Front
          </label>
          <textarea
            name="front"
            id="front"
            placeholder="Front side of card"
            value={formData.front}
            onChange={changeHandler}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="back" className="form-label">
            Back
          </label>
          <textarea
            name="back"
            id="back"
            placeholder="Back side of card"
            defaultValue={formData.back}
            onChange={changeHandler}
            className="form-control"
          />
        </div>
        {buttonOnLeft}
        {buttonOnRight}

        
      </form>
    </div>
  );
}

export default CardForm;
