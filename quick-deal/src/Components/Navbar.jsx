import { Stack, Text, Box, Flex, Input, Button, Icon, Image, Menu, MenuButton, Avatar, MenuList, MenuItem, MenuDivider } from "@chakra-ui/react"
import { SearchIcon, AiOutlineShoppingCart } from '@chakra-ui/icons'

import styles from "../ComponentsCSS/Navbar.module.css"
const Navbar = () => {



    return (
        <Box zIndex={2} border='3px solid black' position="sticky" top="0">
            <Box mt={0} bg="#C6003D" w="100%" h="30px" border="1px solid red" display="flex" justifyContent="space-between" fontSize='12px' pl="91px" pr="91px" alignItems="center" color="white" >
                <Box w="40%" border="1px solid yellow">Brand Waali Quality, Bazaar Waali Deal!</Box>

                <Box w="40%" display="flex" justifyContent="space-between" border="1px solid white"  >
                    <Text >Impact@Snapdeal</Text>
                    <Text>Gift Cards</Text>
                    <Text>Help Center</Text>
                    <Text>Sell On Snapdeal</Text>
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
                <Box w="200px" h="32px" border="1px solid red" ></Box>
                <Box display="flex" alignItems="center" w="779px"   >  <Input id="inputID" bg="white" borderRadius={0} w="80%" border="1px solid red" type="text" placeholder="Search products & brands" />
                    <Button fontSize={14} borderRadius={0} > <SearchIcon mr="5px" /> Search</Button></Box>
                <Box><Button>Cart</Button>   </Box>



                {/* ------------------------------------------------------ */}



                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}
                        >
                            <Avatar
                                size={'sm'}
                                src={
                                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                }
                            />
                        </MenuButton>
                        <MenuList   >
                            <MenuItem>Link 1</MenuItem>
                            <MenuItem>Link 2</MenuItem>
                            <MenuDivider />
                            <MenuItem>Link 3</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>





                {/* ------------------------------------------------------ */}
            </Flex>

        </ Box>
    )
}

export default Navbar










