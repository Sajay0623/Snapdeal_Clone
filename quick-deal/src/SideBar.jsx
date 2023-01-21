
import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';



const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'14px'} mb={2}>
            {children}
        </Text>
    );
};

export default function OnMouseSideBar() {
    return (
        <Box border='2px solid red' w='4xl' className='.sideBody '
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'4xl'} >
                <SimpleGrid columns={3} spacingX='10px' spacingY='10px'>
                    <Stack align={'flex-start'} border="1px solid red"   >
                        <ListHeader>FOOTWEAR</ListHeader>
                        <Link fontSize={'12px'} href={'#'}>Sports Shoes</Link>
                        <Link fontSize={'12px'} href={'#'}>Casual Shoes</Link>
                        <Link fontSize={'12px'} href={'#'}>Slopper & Flip Flops</Link>
                        <Link fontSize={'12px'} href={'#'}>Sandals & Floaters</Link>
                        <Link fontSize={'12px'} href={'#'}>Formal Shoes</Link>
                        <Link fontSize={'12px'} href={'#'}>Loafers</Link>
                        <Link fontSize={'12px'} href={'#'}>Sneakers</Link>
                        <Link fontSize={'12px'} href={'#'}>Ethnic Footwear</Link>
                        <Link fontSize={'12px'} href={'#'}>Shoe Accessories</Link>
                    </Stack>
                    <Stack align={'flex-start'} border="1px solid red" >
                        <ListHeader>CLOTHING</ListHeader>
                        <Link fontSize={'12px'} href={'#'}>T-Shirt 7 Polos</Link>
                        <Link fontSize={'12px'} href={'#'}>Shirts</Link>
                        <Link fontSize={'12px'} href={'#'}>Jeans</Link>
                        <Link fontSize={'12px'} href={'#'}>Trousers 7 Chinos</Link>
                        <Link fontSize={'12px'} href={'#'}>Innerwear 7 Sleepwear</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>ACCESSORIES</ListHeader>
                        <Link fontSize={'12px'} href={'#'}>Wallets</Link>
                        <Link fontSize={'12px'} href={'#'}>Belts</Link>
                        <Link fontSize={'12px'} href={'#'}>Hats & Caps</Link>
                        <Link fontSize={'12px'} href={'#'}>Gift Sets</Link>
                        <Link fontSize={'12px'} href={'#'}>Neckties & Cravates</Link>
                        <Link fontSize={'12px'} href={'#'}>Card Holders</Link>
                        <Link fontSize={'12px'} href={'#'}>Keychains</Link>
                        <Link fontSize={'12px'} href={'#'}>Suspenders</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Follow Us</ListHeader>
                        <Link fontSize={'12px'} href={'#'}>Facebook</Link>
                        <Link fontSize={'12px'} href={'#'}>Twitter</Link>
                        <Link fontSize={'12px'} href={'#'}>Dribbble</Link>
                        <Link fontSize={'12px'} href={'#'}>Instagram</Link>
                        <Link fontSize={'12px'} href={'#'}>LinkedIn</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>WINTER WEAR</ListHeader>
                        <Link fontSize={'12px'} href={'#'}>Jackets</Link>
                        <Link fontSize={'12px'} href={'#'}>Sweatshirts</Link>
                        <Link fontSize={'12px'} href={'#'}>Sweaters</Link>
                        <Link fontSize={'12px'} href={'#'}>Thermals</Link>

                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>BAGS & LUGGAGE</ListHeader>
                        <Link fontSize={'12px'} href={'#'}>Backpacks</Link>
                        <Link fontSize={'12px'} href={'#'}>Laptop Bags</Link>
                        <Link fontSize={'12px'} href={'#'}>Hiking Bags</Link>
                        <Link fontSize={'12px'} href={'#'}>Luggage & Suitcases</Link>
                        <Link fontSize={'12px'} href={'#'}>Travel Accessories</Link>
                        <Link fontSize={'12px'} href={'#'}>Office Bags</Link>

                    </Stack>
                </SimpleGrid>
            </Container>
           
        </Box>
    );
}