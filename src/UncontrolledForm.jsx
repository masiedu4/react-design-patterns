/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 29/08/2022 - 00:37:39
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 29/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";

// an uncontrolled form does not care about its current state until an event is triggered.
const UncontrolledForm = () => {
  const handleSubmit = (e) => {
    console.log(
      nameInput.current.value,
      ageInput.current.value,
      hairColorInput.current.value
    );
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" ref={nameInput} />
      <input name="age" type="number" placeholder="Age" ref={ageInput} />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        ref={hairColorInput}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UncontrolledForm;
