import { Box, Grid, GridItem, Heading } from "@chakra-ui/layout"
import { Image ,Text } from "@chakra-ui/react"

  const ForthLast = ()=>{
    return (
 

<Grid templateColumns='repeat(4, 1fr)'  textAlign ="center"  borderBottom={'1px solid gray'}  borderTop={'1px solid gray'} h='200px' alignItems={'center'} >
  <Box ml={'91px' }   borderLeft={'1px solid gray'}  ><Image w=' 60px' h ="51px"  display={'block'} margin='auto' src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShu37sU3vXD6DOBAleUVjgDriwP7BKdc6DWnWLlpp1m0fSIsAz7DZ2gmEiYKij0hkf9hw&usqp=CAU" ></Image>
  <Heading as = "h4" size={'md'} >100% SECURE PAYMENTS </Heading><Text w = '220px' m='auto'  fontSize={'12px'}  >Moving your card details to a much more secure place</Text></Box>
  <Box borderLeft= {'1px solid gray'}>
    <Image display={'block'} margin='auto' w=' 60px' h ="51px" src = "https://trustwallet.com/assets/images/media/assets/TWT.png" ></Image>
    <Heading as = "h4" size={'18px'} color='#5a5a5a' >TRUSTPAY </Heading><Text w = '220px' m='auto'  fontSize={'12px'} >100% Payment Protection with Easy Return Policy</Text>
  </Box>
  <Box borderLeft= {'1px solid gray'}>
    <Image w=' 60px' h ="51px" display={'block'} margin='auto' src = "https://icon-library.com/images/help-center-icon/help-center-icon-0.jpg" ></Image>
    <Heading as = "h4" size={'md'} >HELP CENTER </Heading><Text w = '220px' m='auto'  fontSize={'12px'} >Got A Question? Look no Further Brows our FAQs or Submit your Query Here..</Text>
  </Box><Box  mr={'91px'} borderLeft= {'1px solid gray'} borderRight= {'1px solid gray'}>
    <Image w=' 60px' h ="51px" display={'block'} margin='auto'  src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVck9Bt3uLvsHCzkWGpRwtsVOxIE5KrmcupQ&usqp=CAU" ></Image>
    <Heading as = "h4" size={'md'} >SHOP ON THE GO</Heading><Text w = '220px' m='auto'  fontSize={'12px'}  >Downoad the app and get exiting app only offer at your fingertips</Text>
  </Box>
  
</Grid>
 



    )
}

export default ForthLast