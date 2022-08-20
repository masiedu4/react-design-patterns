/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 20/08/2022 - 16:24:11
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/08/2022
    * - Author          : Michael
    * - Modification    : 
**/
import React from 'react'

const LargeList = ({ person }) => {
	const { name, age, hairColor, hobbies } = person;

	return (
		<>
			<h3>{name}</h3>
			<p>Age: {age} years</p>
			<p>Hair Color: {hairColor}</p>
			<h3>Hobbies:</h3>
			<ul>
				{hobbies.map(hobby => <li>{hobby}</li>)}
			</ul>
		</>
	)
}

export default LargeList