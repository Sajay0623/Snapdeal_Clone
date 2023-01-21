import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar"
import Body from "./Body"
import LastFooter from "./Components/LastFooter"
import SecondLast from "./Components/SecondLast"
 import LargeWithLogoCentered from "./Components/Thirdlast"
import ForthLast from "./Components/ForthLast"

import './App.css';
 

function App() {
  return (
    <Box className="App" bg={'#F7F7F7'} >
      <Navbar />

      <Body />
        <ForthLast/>
        <LargeWithLogoCentered/>

      <SecondLast/>
      <br/>
      <LastFooter />


      

     
    </Box>

  );
}

export default App;
