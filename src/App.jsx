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

import { people, products } from "./data";

import LargeProductDetail from "./components/products/LargeProductDetail";
import Modal from "./components/Modal";
function App() {
  console.log(people, products);

  return (
    <>
      <Modal>
        <LargeProductDetail product={products[0]} />
      </Modal>
    </>
  );
}

export default App;
