/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 29/08/2022 - 00:55:39
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 29/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import { useState } from "react";
import React from "react";
import { useEffect } from "react";

// Each updated value is tracked in a controlled form...
// The value is not only updated when the form is submitted..
// but when the value is changed.

// this can be used for form validation as shown in the useEffect example below..

const ControlledForm = () => {
  const [nameError, setNameError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState("");

  useEffect(() => {
    if (name.length < 5) {
      setNameError("Name must be at least 5 characters long");
    } else {
      setNameError("");
    }
  }, [name]);
  return (
    <>
      <p>{name}</p>
      <p>{age}</p>
      <p>{hairColor}</p>
      <p>{nameError}</p>
      <form>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <input
          name="hairColor"
          type="text"
          placeholder="Hair Color"
          value={hairColor}
          onChange={(e) => setHairColor(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default ControlledForm;
