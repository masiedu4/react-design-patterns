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


import { people, products } from "./data"
import SmallList from "./components/people/SmallList";
import LargeList from "./components/people/LargeList";
import GeneralList from "./components/GeneralList";

function App() {
  console.log(people, products);

  return (
    <>
      <GeneralList items={people} resourceName="person" itemComponent={SmallList} />
      <GeneralList items={people} resourceName="person" itemComponent={LargeList} />
    </>
  )
}

export default App
