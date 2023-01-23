import { Box, Input, Link, Image, Select, Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
// import './App.css';







function Admin() {
    const [pData, setPdata] = useState({ image: "", name: "", price: "", rating: "3.5" })
    const navigate = useNavigate()
    const handlsubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3004/data", { pData }).then(function (response) {
            <Navigate to="/product" />;
        })
            .catch(function (error) {
                console.log(error);
            });
        console.log("post")

    }
    const Change = (e) => {
        setPdata({ ...pData, [e.target.name]: e.target.value })
    }
    console.log(pData)

    return (
        <Box w='400px' m='auto' mt="30px" className="Admin" pl={10} pr='10px' >
            <Box m='auto' w='20%' py={6}>
                <Link to="/product">
                    <Image display={'block'} w='100%' h='70px' src='https://i.postimg.cc/yxt1pyrx/Quick-Deal.png' />
                </Link>
            </Box>
            <form onSubmit={handlsubmit} >
                <label  >
                    Enter Product URL :<Input name="image" value={pData.image} onChange={Change} placeholder="Enter Url" ></Input>
                </label>
                <label>Enter Product Name :</label>
                <Input name="name" value={pData.name} onChange={Change} placeholder="Title" ></Input>
                <label>Enter Description:  <Input placeholder="Description" ></Input></label>
                <label>Select Category</label>
                <Select placeholder='Select option'   >
                    <option value='option1'>Men</option>
                    <option value='option2'>Women</option>

                </Select>
                <label>Enter Price : <Input name="price" value={pData.price} onChange={Change} placeholder="price" ></Input></label>
                <Input mt='5px' mb='5px' bg="blue.500" type="submit" ></Input>
                <Button background={'transparent'} fontSize={'6px'} onClick={() => navigate("/product")} >Go to product page</Button>

            </form>




        </Box>



    )
}

export default Admin