/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 16/08/2022 - 17:18:36
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 16/08/2022
 * - Author          : Michael
 * - Modification    :
 **/

import CurrentUserLoader from "./loader containers/CurrentUserLoader";
import { UserInfo } from "./components/UserInfo";
import { ProductInfo } from "./components/ProductInfo";
import { UserLoader } from "./loader containers/UserLoader";
import { ResourceLoader } from "./loader containers/ResourceLoader";

function App() {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>

      <UserLoader userId="1">
        <UserInfo />
      </UserLoader>

      <ResourceLoader resourceName="product" resourceUrl="/products/1">
        <ProductInfo />
      </ResourceLoader>

      <ResourceLoader resourceName="user" resourceUrl="/users/1">
        <UserInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
