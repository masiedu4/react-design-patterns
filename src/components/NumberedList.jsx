/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 20/08/2022 - 16:59:06
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 20/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";

const NumberedList = ({
	items,
	resourceName,
	itemComponent: ItemComponent,
}) => {
	return (
		<>
			{items.map((item, i) => (
				<>
					<h3> {i + 1}  </h3>
					<ItemComponent key={i} {...{ [resourceName]: item }} />
				</>
			))}
		</>
	);
};

export default NumberedList;
