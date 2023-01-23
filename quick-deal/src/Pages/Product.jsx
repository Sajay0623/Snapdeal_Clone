import axios from "axios"
import { useState, useEffect } from "react"
import { Box, Heading, Image, Text } from "@chakra-ui/react"
import { SimpleGrid, Select } from '@chakra-ui/react'
import Navbar from "../Components/Navbar"

import LastFooter from "../Components/LastFooter"
import SecondLast from "../Components/SecondLast"
import LargeWithLogoCentered from "../Components/Thirdlast"
import ForthLast from "../Components/ForthLast"

import { Link } from "react-router-dom"
import Order from "./Order"

const Product = () => {
    const [sport, setSport] = useState([])
    const [post, setpost] = useState([])
    const [casual, setCasual] = useState([])
    const [womenData, setWomendata] = useState({})
    const [cat, setCat] = useState("men")
    const [val, setVal] = useState("sport")

    useEffect(() => {
        axios.get(" http://localhost:3004/Men_Fashion").then((res) => setSport(res.data.FootWear.sportsshoes))
        axios.get(" http://localhost:3004/Men_Fashion").then((res) => setCasual(res.data.FootWear.casualshoes))
        axios.get(" http://localhost:3004/data").then((res) => setpost(res.data))
        // axios.get(" http://localhost:3004/Women_Fashion").then((res) => setWomendata(res.data.Clothing[0]))
    }, [])
    // tshirt Shirt
    // console.log(womenData)
    // console.log(menData.tshirt)
    // console.log(cat)
    // console.log(val)

    console.log(post, "post")
    let arr = []
    const SinglePage = (p) => {
        arr.push(p)
        localStorage.setItem("Order", JSON.stringify(arr))


    }

    return (
        <Box m='auto'  >
            <Navbar />
            <Select pt={'20px'} w="20%" value={cat} margin={'auto'} onChange={(e) => setCat(e.target.value)}  >
                <option value='men'>Mens Fashion</option>
                <option value='women'>Womens Fashion</option>
            </Select>
            {cat == 'men' ? <Select w="20%" margin={'auto'} value={val} onChange={(e) => setVal(e.target.value)}  >
                <option value='sport'>Jeans</option>
                <option value='casual'>T-Shirts</option>
                <option value='shirt'>Shirts</option>
            </Select> : <Select w="20%" margin={'auto'} value={val} onChange={(e) => setVal(e.target.value)} placeholder='Select option'>
                <option value='jeans'>Jeans</option>
                <option value='lehngas'>Lehngas</option>
                <option value='salwar'>salwar suit</option>
            </Select>}
            <Box>{
                val == "sport" ? <SimpleGrid columns={4} spacing={10} w='90%' m='auto' mt='10px' >
                    {sport.map((el) => <Box key={el.id} textAlign="center" onClick={() => SinglePage(el)}   >
                        <Link to="/order">
                            <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                            <Heading as="h4" size={'sm'}>{el.name}</Heading>
                            <Text>Price: {el.price}</Text>
                            <Text>{`Rating: ${el.rating}/5`}</Text>

                        </Link>
                    </Box>)}
                </SimpleGrid> : <SimpleGrid columns={4} spacing={10} w='90%' m='auto' mt='10px' >
                    {casual.map((el) => <Box key={el.id} textAlign="center"    >
                        <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                        <Heading as="h4" size={'sm'}>{el.name}</Heading>
                        <Text>Price: {el.price}</Text>
                        <Text>{`Rating: ${el.rating}/5`}</Text>
                    </Box>)}
                </SimpleGrid>


            }
                <SimpleGrid columns={4} spacing={10} w='90%' m='auto' mt='10px' >
                    {post.map((el) => <Box key={el.id} textAlign="center"    >
                        <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                        <Heading as="h4" size={'sm'}>{el.name}</Heading>
                        <Text>Price: {el.price}</Text>
                        <Text>{`Rating: ${el.rating}/5`}</Text>
                    </Box>)}
                </SimpleGrid>

            </Box>

            <ForthLast />
            <LargeWithLogoCentered />

            <SecondLast />
            <br />
            <LastFooter />
        </Box>

    )


}

export default Product