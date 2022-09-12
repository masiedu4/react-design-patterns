/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 31/08/2022 - 06:59:16
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 31/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
export const printProps = (Component) => {
  return (props) => {
    console.log(props);
    return <Component {...props} />;
  };
};
