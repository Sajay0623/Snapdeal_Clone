import { Box, Text, Image, Flex, Heading } from "@chakra-ui/react"
import { useState } from "react";
import styles from "./ComponentsCSS/Navbar.module.css"
import MySlider from "./Components/Slider"

import Carousel from "./Components/Temp"
import OnMouseSideBar from "./SideBar"

const Body = () => {
    const [isShown, setIsShown] = useState(false)
    return (
        <Box>
            <Box display="flex" width=" 90%" ml="90px" mr="90px" mt={0} border="1px solid green" bg="#f7f7f7" >
                <Box w="200px" h="400px" border="1px solid black"  >
                    <Text>TOP CATEGORIES</Text>
                    <Text w="195px" h="42px" alignItems="center" display="flex"  className="HOVER"   >  <Image  mr= "15px"  border="1px solid red" rounded={'full'} w="30px" h="30px"
                        src={
                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        } ></Image>  Mens's Fashion </Text>
                    <Text w="195px" h="42px" alignItems="center" display="flex"   mt="2px" onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}    > <Image mr= "15px"  rounded={'full'} w="30px" h="30px"
                            src={
                                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                            } ></Image> Women's Fashion</Text>
                    <Text w="195px" h="42px" alignItems="center" display="flex" mt="2px" onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}    > <Image mr= "15px"  rounded={'full'} w="30px" h="30px"
                            src={
                                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                            } ></Image>   Homes & Kitchen</Text>
                    <Text w="195px" h="42px" alignItems="center" display="flex" mt="2px" onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}    > <Image  mr= "15px" rounded={'full'} w="30px" h="30px"
                            src={
                                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                            } ></Image>   Toys, Kid's Fashion </Text>

                    <Text w="195px" h="42px" alignItems="center" display="flex" mt="2px" onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}     > <Image mr= "15px"  rounded={'full'} w="30px" h="30px"
                            src={
                                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                            } ></Image> Beauty & Health  </Text>
                </Box>
                {isShown ? (
                    <OnMouseSideBar/> 
                   

                ) : <Carousel />}

                <Box><Image width={'250px'} h='332px' src="https://i.postimg.cc/7h8qcJtn/EnterPin.jpg"></Image></Box>


            </Box>

            <MySlider />

            <Flex border={'1px solid red'} w='1380px' h='430px' m='auto' box-shadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' justifyContent={'space-between'}   >
                <Box border={'1px solid black'} w='40%'  ><Image h='100%' ml='170px' src="https://i.postimg.cc/MTyJX7SM/m.jpg" ></Image></Box>
                <Flex border={'1px solid black'} w='55%' bg='#FFFFFF '   ><Box w='80%' border={'1px solid red'} ><Heading as="h1" w='60%' mt='80px' ml=' 80px'  >Download Snapdeal App Now</Heading><Text mt='10px' ml=' 80px'   >Fast, Simple & Delightful</Text><Text mt='10px' ml=' 80px'  >All its takes is 30 seconds to Download</Text>
                    <Flex border={'1px solid red'} w='50%' ml={'80px'} mt='15px' justifyContent={'space-between'} ><Image w="130px" h="41px" src="https://i.postimg.cc/TPsrZLNp/apple.jpg"  ></Image  ><Image w="130px" h="41px" src='https://i.postimg.cc/4ykp3CgG/googleplay.jpg' ></Image></Flex></Box> <Box w='20%'   ><Image h='230px' src="https://i.postimg.cc/4NdrVkvQ/10002.png" ></Image></Box></Flex>

            </Flex>
        </Box>
    )
}

export default Body


