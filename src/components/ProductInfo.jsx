/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 24/08/2022 - 05:18:55
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 24/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
export const ProductInfo = ({ product }) => {
  const { name, price, description, rating } = product || {};

  return product ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  ) : (
    <p>Loading...</p>
  );
};
