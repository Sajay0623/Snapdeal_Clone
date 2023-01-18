import { Stack, Text, Box } from "@chakra-ui/react"

import styles from "../ComponentsCSS/Navbar.module.css"
const Navbar = () => {

    return (
        <Stack h="1000px">
            <Box mt={0} bg="#e40046" w="100%" h="30px" border="1px solid red" display="flex" justifyContent="space-between"  >
                <Box w="40%" border="1px solid yellow">Brand Waali Quality, Bazaar Waali Deal!</Box>

                <Box w="40%" display="flex" border="1px solid white">
                    Brand Waali Quality, Bazaar Waali Deal!
                </Box>

            </Box>
            {/* <Stack style={{
                width: "100%",
                // marginTop: "0%",
                height: "120px",
                border: "1px solid black",
                position: "sticky",
                top: "0px"
            }}  ></Stack> */}

        </Stack >
    )
}

export default Navbar

// width: 100%;
//     height: 30px;
//     border: 1px solid red


{/* <Text>Brand Waali Quality, Bazaar Waali Deal!</Text> */ }
{/* <Text>Impact@Snapdeal</Text>
<Text>Gift Cards</Text>
<Text>Help Center</Text>
<Text>Sell On Snapdeal</Text>
<Text><a href=""> <i class="fas fa-mobile-alt"></i> Download App</a></Text>  */}




