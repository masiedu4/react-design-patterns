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
import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import SplitScreen from './SplitScreen'


// styles for left side of the screen
const Container = styled.div`
 background-color:red ;
`

// styles for the right side of the screen
const Container2 = styled.div`
background-color:blue;
`
// component for left side of the screen
const LeftHandScreen = () => {
  return (
    <Container>
      <h1>Left Hand Screen</h1>
    </Container>
  )
}

// component for the right side of the screen
const RightHandScreen = () => {
  return (
    <Container2>
      <h1>Right Hand Screen</h1>
    </Container2>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SplitScreen left={LeftHandScreen} right={RightHandScreen} />
    </div>
  )
}

export default App
