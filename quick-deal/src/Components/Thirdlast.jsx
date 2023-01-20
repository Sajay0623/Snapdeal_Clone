import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    Input,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { BiMailSend } from 'react-icons/bi';
  import { ReactNode } from 'react';
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'sm'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithLogoCentered() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'7xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>POLICY INFO</ListHeader>
              <Link  fontSize={'12px'}   href={'#'}>Privacy Policy</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link  fontSize={'12px'}   href={'#'}>Terms of Sale</Link>
                 
              </Stack>
              <Link  fontSize={'12px'}   href={'#'}>Terms of Use</Link>
              <Link  fontSize={'12px'}   href={'#'}>Report Abuse & Takedown Policy</Link>
              <Link  fontSize={'12px'}   href={'#'}>FAQ</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link  fontSize={'12px'}   href={'#'}>Impact@Snapdeal</Link>
              <Link  fontSize={'12px'}   href={'#'}>Careers</Link>
              <Link  fontSize={'12px'}   href={'#'}>Press</Link>
              <Link  fontSize={'12px'}   href={'#'}>Sitemap</Link>
              <Link  fontSize={'12px'}   href={'#'}>Contact Us</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>SNAPDEAL BUSINESS</ListHeader>
              <Link  fontSize={'12px'}   href={'#'}>Shopping App</Link>
              <Link  fontSize={'12px'}   href={'#'}>Sell on Snapdeal</Link>
              <Link  fontSize={'12px'}   href={'#'}>Media Enquiries</Link>
              
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>POPULAR LINKS</ListHeader>
              <Link  fontSize={'12px'}   href={'#'}>Lehenga</Link>
              <Link  fontSize={'12px'}   href={'#'}>Kid's Clothing</Link>
              <Link  fontSize={'12px'}   href={'#'}>Sarees</Link>
              <Link  fontSize={'12px'}   href={'#'}>Winter Wear</Link>
              
            </Stack>
            <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton onClick={()=>alert("Thankyou Now you Subscribed We will update you on new Arrivals"  )}
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>

          </SimpleGrid>
        </Container>
       
      </Box>
    );
  }