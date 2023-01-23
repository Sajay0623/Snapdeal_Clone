import { Stack, Text, Box, Flex, Input, Button, Icon, Image, Menu, MenuButton, Avatar, MenuList, MenuItem, MenuDivider } from "@chakra-ui/react"
import { SearchIcon, AiOutlineShoppingCart } from '@chakra-ui/icons'
import { useNavigate, Link } from "react-router-dom"
import styles from "../ComponentsCSS/Navbar.module.css"
const Navbar = () => {
    const navigate = useNavigate()


    return (

        <Box zIndex={10} position="sticky" top="0" >



            <Box mt={0} bg="#C6003D" w="100%" h="30px" display="flex" justifyContent="space-between" fontSize='12px' pl="91px" pr="91px" alignItems="center" color="white" >
                <Box w="40%" >Brand Waali Quality, Bazaar Waali Deal!</Box>

                <Box w="40%" display="flex" justifyContent="space-between"   >
                    <Text >Impact@Snapdeal</Text>
                    <Text>Gift Cards</Text>
                    <Text>Help Center</Text>
                    <Link to="/seller"  >Sell On Snapdeal</Link>
                    <Text><a href=""> <i className="fas fa-mobile-alt"></i> Download App</a></Text>
                </Box>
            </Box>
            <Flex
                w="100%"
                mt="0%"
                h="65px"
                border="1px solid black"

                top="0"
                alignItems="center"
                justifyContent="space-around"
                bg="#E40046"

            >
                <Box w="200px" h="50px" border="1px solid red" > <Link to="/" ><Image w="100%" h="100%" src="https://i.postimg.cc/yxt1pyrx/Quick-Deal.png"  ></Image></Link>     </Box>
                <Box display="flex" alignItems="center" w="779px"   >  <Input id="inputID" bg="white" borderRadius={0} w="80%" border="1px solid red" type="text" placeholder="Search products & brands" />
                    <Button fontSize={14} borderRadius={0} > <SearchIcon mr="5px" /> Search</Button></Box>
                <Flex color={'white'}>  Cart <Image ml='15px' w='25px' h='25px' src="https://i.postimg.cc/gkzQ1hPk/shopping-cart-removebg-preview.png" ></Image> </Flex>



                {/* ------------------------------------------------------ */}



                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            as={Button}
                            // rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}
                        >
                            <Avatar
                                size={'sm'}
                                src={
                                    'https://i.postimg.cc/FRt08w75/user.png'
                                }
                            />
                        </MenuButton>
                        <MenuList   >
                            <MenuItem  > <Link to="/signup" >Signup</Link></MenuItem>

                            <MenuItem onClick={() => navigate("/login")} >Login</MenuItem>
                            <MenuDivider />
                            <MenuItem  ><Link to="Order" >Order</Link></MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>





                {/* ------------------------------------------------------ */}
            </Flex>

        </ Box>
    )
}

export default Navbar










