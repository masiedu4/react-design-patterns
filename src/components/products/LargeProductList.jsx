/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 20/08/2022 - 17:02:48
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/08/2022
    * - Author          : Michael
    * - Modification    : 
**/
import React from 'react'

const LargeProductList = ({ product }) => {
	const { name, price, description, rating } = product

	return (
		<>
			<h3> {name}</h3>
			<h3>{price}</h3>
			<p> {description} </p>
			<p> {rating} </p>
		</>
	)
}

export default LargeProductList