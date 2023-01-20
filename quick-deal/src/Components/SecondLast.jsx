import { Box ,Heading,Image} from "@chakra-ui/react"

const SecondLast = ()=>{
    return (
        
        <Box h= "121px" bg={'#ffffff'}  borderBottom ="0.5px solid gray" borderTop="0.5px solid gray" display={'flex'}  alignItems='center'  >
            <hr />
       <Box  h='60px'  marginLeft={'91px'} >   <p   >PAYMENT</p> <Image mt={'5px'} h = '35px' w ='280px' src= "https://i.postimg.cc/J4SYPJrY/p.jpg" ></Image></Box>


       <Box   marginLeft={'200px'} ><p>CONNECT</p><Box h = "39px" w = '340px' mt={'5px'}   display={'flex'}  justifyContent={'space-between'}  >
        <Image w='35px' h = '35px'    src= "https://i4.sdlcdn.com/img/footer/facebook@4x.png" ></Image>
       <Image w='35px' h = '35px'   src= "https://i1.sdlcdn.com/img/footer/twitter@4x.png" ></Image>
       <Image w='35px' h = '35px'  src= "https://i4.sdlcdn.com/img/footer/instagram@4x.png" ></Image>
       <Image w='35px' h = '35px'   src= "https://i1.sdlcdn.com/img/footer/youtube@4x.png" ></Image >
       <Image w='35px' h = '35px'  src= "https://i4.sdlcdn.com/img/footer/Telegram-Logo_112x112.png" ></Image>
       <Image w='35px' h = '35px'  src= "https://i2.sdlcdn.com/img/footer/linkedin@4x.png" ></Image>
       <Image w='35px' h = '35px'  src= "https://i1.sdlcdn.com/img/footer/whatsapp-logo-112x112.png" ></Image></Box>
       
       
       </Box>

       <hr />
        
        </Box>
    )
}


export default SecondLast 