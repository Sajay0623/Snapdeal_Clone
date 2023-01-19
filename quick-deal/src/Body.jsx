import { Box, Text, Image } from "@chakra-ui/react"
import { useState } from "react";
import styles from "./ComponentsCSS/Navbar.module.css"
import Carousel from "./Components/Temp"


const Body = () => {
    const [isShown, setIsShown] = useState(false)
    return (
        <Box display="flex" width=" 90%" ml="90px" mr="90px" mt={0} border="5px solid green" bg="#f7f7f7" >
            <Box w="250px" h="679px" border="1px solid black"  >
                <Text>TOP CATEGORIES</Text>
                <Text w="195px" h="42px" alignItems="center" display="flex" border="1px solid red" onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}       >  <Image border="1px solid red" rounded={'full'} w="20px" h="20px"
                        src={
                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        } ></Image>  t1 </Text>
                <Text w="195px" h="42px" alignItems="center" display="flex" border="1px solid red" mt="2px" onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}    > <Image rounded={'full'} w="20px" h="20px"
                        src={
                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        } ></Image>   t2</Text>
                <Text w="195px" h="42px" alignItems="center" display="flex" mt="2px" onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}    > <Image rounded={'full'} w="20px" h="20px"
                        src={
                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        } ></Image>   t3</Text>
                <Text w="195px" h="42px" alignItems="center" display="flex" mt="2px" onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}    > <Image rounded={'full'} w="20px" h="20px"
                        src={
                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        } ></Image>   t4</Text>
                <Text w="195px" h="42px" alignItems="center" display="flex" mt="2px" onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}     > <Image rounded={'full'} w="20px" h="20px"
                        src={
                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        } ></Image>   t5</Text>
                <Text w="195px" h="42px" alignItems="center" display="flex" mt="2px" onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}     > <Image rounded={'full'} w="20px" h="20px"
                        src={
                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        } ></Image>   t6</Text>
            </Box>
            {isShown ? (
                <Box className={styles.sideBody}

                >On</Box>
            ) : <Carousel />}

        </Box>
    )
}

export default Body


// width: 15%;
// height: 10vh;
// border: 1px solid red