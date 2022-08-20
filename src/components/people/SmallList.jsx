/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 20/08/2022 - 16:21:20
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/08/2022
    * - Author          : Michael
    * - Modification    : 
**/
import React from 'react'

const SmallList = ({ person }) => {
	const { name, age } = person;

	return (
		<p>Name:{name} , Age:{age} years</p>
	)
}

export default SmallList