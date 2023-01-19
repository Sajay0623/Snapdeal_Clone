import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar"
import Body from "./Body"
import LastFooter from "./Components/LastFooter"
import SecondLast  from "./Components/SecondLast"
import './App.css';


function App() {
  return (
    <Box className="App" bg={'#F7F7F7'} >
      <Navbar />

      <Body />

      <SecondLast/>
      <br/>
      <LastFooter />





    </Box>

  );
}

export default App;
