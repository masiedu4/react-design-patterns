/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 20/08/2022 - 16:57:55
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/08/2022
    * - Author          : Michael
    * - Modification    : 
**/
import React from 'react'

const SmallProductList = ({ product }) => {
	const { name, price } = product
	return (
		<h3> Name: {name} , Price:{price}</h3>
	)
}

export default SmallProductList