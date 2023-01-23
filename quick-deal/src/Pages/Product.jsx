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
    const [post, setpost] = useState([])
    const [sport, setSport] = useState([])
    const [mjeans, setMjeans] = useState([])
    const [shirt, setShirt] = useState([])
    const [tshirt, setTshirt] = useState([])
    const [casual, setCasual] = useState([])
    const [saree, setSaree] = useState([])
    const [salwar, setSalwar] = useState([])
    const [lehngas, setLehngas] = useState([])
    const [jeans, setJeans] = useState([])
    const [heels, setHeels] = useState([])
    const [flats, setFlats] = useState([])
    const [slipper, setSlipper] = useState([])
    const [section, setSection] = useState("footwear")
    const [cat, setCat] = useState("men")
    const [val, setVal] = useState("sport")

    useEffect(() => {
        axios.get(" http://localhost:3004/Men_Fashion").then((res) => setSport(res.data.FootWear.sportsshoes))
        axios.get(" http://localhost:3004/Men_Fashion").then((res) => setCasual(res.data.FootWear.casualshoes))
        axios.get(" http://localhost:3004/Men_Fashion").then((res) => setTshirt(res.data.Clothing.tshirt))
        axios.get(" http://localhost:3004/Men_Fashion").then((res) => setShirt(res.data.Clothing.Shirt))
        axios.get(" http://localhost:3004/Men_Fashion").then((res) => setMjeans(res.data.Clothing.Jeans))
        axios.get(" http://localhost:3004/data").then((res) => setpost(res.data))
        axios.get("http://localhost:3004/Women_Fashion").then((res) => setSaree(res.data.Clothing[0].saree))
        axios.get("http://localhost:3004/Women_Fashion").then((res) => setSalwar(res.data.Clothing[0].salwar_suit))
        axios.get("http://localhost:3004/Women_Fashion").then((res) => setLehngas(res.data.Clothing[0].lehngas))
        axios.get("http://localhost:3004/Women_Fashion").then((res) => setJeans(res.data.Clothing[0].jeans))
        axios.get("http://localhost:3004/Women_Fashion").then((res) => setHeels(res.data.Footwear[0].heels))
        axios.get("http://localhost:3004/Women_Fashion").then((res) => setFlats(res.data.Footwear[1].flats_sandals))
        axios.get("http://localhost:3004/Women_Fashion").then((res) => setSlipper(res.data.Footwear[2].slipper_flipflop))
    }, [])
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
            <Select pt={'20px'} w="20%" value={section} margin={'auto'} onChange={(e) => setSection(e.target.value)}  >
                <option value='footwear'>FootWear</option>
                <option value='clothing'>Clothing</option>
            </Select>
            {cat == 'men' ? section == "footwear" ? <Select w="20%" margin={'auto'} value={val} onChange={(e) => setVal(e.target.value)}  >
                <option value='sport'>Sport</option>
                <option value='casual'>Casual</option>
            </Select> : <Select w="20%" margin={'auto'} value={val} onChange={(e) => setVal(e.target.value)} >
                <option value='jeans'>Jeans</option>
                <option value='shirt'>Shirt</option>
                <option value='tshirt'>T-shirt</option>
            </Select> : section == "footwear" ? <Select w="20%" margin={'auto'} value={val} onChange={(e) => setVal(e.target.value)}  >
                <option value='heels'>Heals</option>
                <option value='flats'>flats & sandals</option>
                <option value='slipper'>slipper & flipflop</option>
            </Select> : <Select w="20%" margin={'auto'} value={val} onChange={(e) => setVal(e.target.value)}  >
                <option value='salwar'>salwar suit</option>
                <option value='jeans'>Jeans</option>
                <option value='lehngas'>Lehngas</option>
                <option value='saree'>Saree</option>
            </Select>
            }


            <Box>
                {cat == 'men' ? section == "footwear" ? val == "sport" ?
                    <SimpleGrid columns={4} spacing={10} w='90%' m='auto' mt='10px' >
                        {sport.map((el) => <Box key={el.id} textAlign="center" onClick={() => SinglePage(el)}   >
                            <Link to="/order">
                                <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                                <Heading as="h4" size={'sm'}>{el.name}</Heading>
                                <Text>Price: {el.price}</Text>
                                <Text>{`Rating: ${el.rating}/5`}</Text>

                            </Link>
                        </Box>)}
                    </SimpleGrid>
                    : <SimpleGrid columns={4} spacing={10} w='90%' m='auto' mt='10px' >
                        {casual.map((el) => <Box key={el.id} textAlign="center"    >
                            <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                            <Heading as="h4" size={'sm'}>{el.name}</Heading>
                            <Text>Price: {el.price}</Text>
                            <Text>{`Rating: ${el.rating}/5`}</Text>
                        </Box>)}
                    </SimpleGrid>
                    : val == "mjeans" ?
                        <SimpleGrid columns={4} spacing={10} w='90%' m='auto' mt='10px' >
                            {mjeans.map((el) => <Box key={el.id} textAlign="center"    >
                                <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                                <Heading as="h4" size={'sm'}>{el.name}</Heading>
                                <Text>Price: {el.price}</Text>
                                <Text>{`Rating: ${el.rating}/5`}</Text>
                            </Box>)}
                        </SimpleGrid>
                        : val == "shirt" ?
                            <SimpleGrid columns={4} spacing={10} w='90%' m='auto' mt='10px' >
                                {shirt.map((el) => <Box key={el.id} textAlign="center" onClick={() => SinglePage(el)}   >
                                    <Link to="/order">
                                        <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                                        <Heading as="h4" size={'sm'}>{el.name}</Heading>
                                        <Text>Price: {el.price}</Text>
                                        <Text>{`Rating: ${el.rating}/5`}</Text>

                                    </Link>
                                </Box>)}
                            </SimpleGrid>
                            : <SimpleGrid columns={4} spacing={10} w='90%' m='auto' mt='10px' >
                                {tshirt.map((el) => <Box key={el.id} textAlign="center" onClick={() => SinglePage(el)}   >
                                    <Link to="/order">
                                        <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                                        <Heading as="h4" size={'sm'}>{el.name}</Heading>
                                        <Text>Price: {el.price}</Text>
                                        <Text>{`Rating: ${el.rating}/5`}</Text>

                                    </Link>
                                </Box>)}
                            </SimpleGrid>
                    : section == "footwear" ? val == "heels" ?
                        <SimpleGrid columns={4} spacing={10} w='90%' m='auto' mt='10px' >
                            {heels.map((el) => <Box key={el.id} textAlign="center" onClick={() => SinglePage(el)}   >
                                <Link to="/order">
                                    <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                                    <Heading as="h4" size={'sm'}>{el.name}</Heading>
                                    <Text>Price: {el.price}</Text>
                                    <Text>{`Rating: ${el.rating}/5`}</Text>

                                </Link>
                            </Box>)}
                        </SimpleGrid>
                        : val == "flats" ? <SimpleGrid columns={4} spacing={10} w='90%' m='auto' mt='10px' >
                            {flats.map((el) => <Box key={el.id} textAlign="center" onClick={() => SinglePage(el)}   >
                                <Link to="/order">
                                    <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                                    <Heading as="h4" size={'sm'}>{el.name}</Heading>
                                    <Text>Price: {el.price}</Text>
                                    <Text>{`Rating: ${el.rating}/5`}</Text>

                                </Link>
                            </Box>)}
                        </SimpleGrid>
                            : <SimpleGrid columns={4} spacing={10} w='90%' m='auto' mt='10px' >
                                {slipper.map((el) => <Box key={el.id} textAlign="center" onClick={() => SinglePage(el)}   >
                                    <Link to="/order">
                                        <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                                        <Heading as="h4" size={'sm'}>{el.name}</Heading>
                                        <Text>Price: {el.price}</Text>
                                        <Text>{`Rating: ${el.rating}/5`}</Text>

                                    </Link>
                                </Box>)}
                            </SimpleGrid>
                        : val == "jeans" ? <SimpleGrid columns={4} spacing={10} w='90%' m='auto' mt='10px' >
                            {jeans.map((el) => <Box key={el.id} textAlign="center" onClick={() => SinglePage(el)}   >
                                <Link to="/order">
                                    <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                                    <Heading as="h4" size={'sm'}>{el.name}</Heading>
                                    <Text>Price: {el.price}</Text>
                                    <Text>{`Rating: ${el.rating}/5`}</Text>

                                </Link>
                            </Box>)}
                        </SimpleGrid>
                            : val == "lehngas" ? <SimpleGrid columns={4} spacing={10} w='90%' m='auto' mt='10px' >
                                {lehngas.map((el) => <Box key={el.id} textAlign="center" onClick={() => SinglePage(el)}   >
                                    <Link to="/order">
                                        <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                                        <Heading as="h4" size={'sm'}>{el.name}</Heading>
                                        <Text>Price: {el.price}</Text>
                                        <Text>{`Rating: ${el.rating}/5`}</Text>

                                    </Link>
                                </Box>)}
                            </SimpleGrid> : val == "saree" ? <SimpleGrid columns={4} spacing={10} w='90%' m='auto' mt='10px' >
                                {saree.map((el) => <Box key={el.id} textAlign="center" onClick={() => SinglePage(el)}   >
                                    <Link to="/order">
                                        <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                                        <Heading as="h4" size={'sm'}>{el.name}</Heading>
                                        <Text>Price: {el.price}</Text>
                                        <Text>{`Rating: ${el.rating}/5`}</Text>

                                    </Link>
                                </Box>)}
                            </SimpleGrid>
                                : <SimpleGrid columns={4} spacing={10} w='90%' m='auto' mt='10px' >
                                    {salwar.map((el) => <Box key={el.id} textAlign="center" onClick={() => SinglePage(el)}   >
                                        <Link to="/order">
                                            <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                                            <Heading as="h4" size={'sm'}>{el.name}</Heading>
                                            <Text>Price: {el.price}</Text>
                                            <Text>{`Rating: ${el.rating}/5`}</Text>

                                        </Link>
                                    </Box>)}
                                </SimpleGrid>}
                <SimpleGrid columns={4} spacing={10} w='90%' m='auto' mt='10px' >
                    {post.map((el) => <Box key={el.id} textAlign="center"    >
                        <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                        <Heading as="h4" size={'sm'}>{el.name}</Heading>
                        <Text>Price: {el.price}</Text>
                        <Text>{`Rating: ${el.rating}/5`}</Text>
                    </Box>)}
                </SimpleGrid>
            </Box>


            {/* <Box>{
               section == "footwear" ? val == "sport" ? <SimpleGrid columns={4} spacing={10} w='90%' m='auto' mt='10px' >
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
            </Box> */}



            <ForthLast />
            <LargeWithLogoCentered />

            <SecondLast />
            <br />
            <LastFooter />
        </Box>

    )


}

export default Product