import { Box } from "@chakra-ui/react"
import Single from "./SingleProd"






const Order = () => {
    let single = JSON.parse(localStorage.getItem('Order'))
    console.log(single, "locsal")

    return (
        <Box>
            {
                single.map((el) => <Single key={el.id} {...el} />)
            }
        </Box>

    )
}

export default Order