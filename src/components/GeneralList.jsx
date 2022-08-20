/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 20/08/2022 - 16:41:59
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/08/2022
    * - Author          : Michael
    * - Modification    : 
**/
import React from 'react'

const GeneralList = ({ items, resourceName, itemComponent: ItemComponent }) => {
	return (
		<>
			{
				items.map((item, i) => <ItemComponent key={i} {...{ [resourceName]: item }} />)
			}
		</>
	)
}

export default GeneralList