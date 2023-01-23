# symptomatic-cows-518



 <Box m="auto" >
            <Navbar />
            <Select pt={'20px'} w="20%" value={cat} margin={'auto'} onChange={(e) => setCat(e.target.value)}  >
                <option value='men'>Mens Fashion</option>
                <option value='women'>Womens Fashion</option>
            </Select>
            {cat == 'men' ? <Select w="20%" margin={'auto'} value={val} onChange={(e) => setVal(e.target.value)}  >
                <option value='jeans'>Jeans</option>
                <option value='tshirt'>T-Shirts</option>
                <option value='shirt'>Shirts</option>
            </Select> : <Select w="20%" margin={'auto'} value={val} onChange={(e) => setVal(e.target.value)} placeholder='Select option'>
                <option value='jeans'>Jeans</option>
                <option value='lehngas'>Lehngas</option>
                <option value='salwar'>salwar suit</option>
            </Select>}
            {val == "jeans" ? console.log(menData.Jeans) : val == "tshirt" ? console.log(menData.tshirt) : "a"}

            {/* <SimpleGrid columns={4} spacing={10}>

                {


                    val == "" ? menData.Jeans.map((el) => (
                        <Box key={el.id} textAlign="center" >
                            <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                            <Heading as="h4" size={'sm'}>{el.name}</Heading>
                            <Text>Price: {el.price}</Text>
                            <Text>{`Rating: ${el.rating}/5`}</Text>
                        </Box>
                    )) : val == "jeans" ? menData.Jeans.map((el) => (
                        <Box key={el.id} textAlign="center" >
                            <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                            <Heading as="h4" size={'sm'}>{el.name}</Heading>
                            <Text>Price: {el.price}</Text>
                            <Text>{`Rating: ${el.rating}/5`}</Text>
                        </Box>
                    )) : val == "tshirt" ? menData.tshirt.map((el) => (
                        <Box key={el.id} textAlign="center" >
                            <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                            <Heading as="h4" size={'sm'}>{el.name}</Heading>
                            <Text>Price: {el.price}</Text>
                            <Text>{`Rating: ${el.rating}/5`}</Text>
                        </Box>
                    )) : val == "shirt" ? menData.shirt.map((el) => (
                        <Box key={el.id} textAlign="center" >
                            <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                            <Heading as="h4" size={'sm'}>{el.name}</Heading>
                            <Text>Price: {el.price}</Text>
                            <Text>{`Rating: ${el.rating}/5`}</Text>
                        </Box>
                    )) : val == "jeans" ? womenData.Jeans.map((el) => (
                        <Box key={el.id} textAlign="center" >
                            <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                            <Heading as="h4" size={'sm'}>{el.name}</Heading>
                            <Text>Price: {el.price}</Text>
                            <Text>{`Rating: ${el.rating}/5`}</Text>
                        </Box>
                    )) : val == "lehngas" ? womenData.lehngas.map((el) => (
                        <Box key={el.id} textAlign="center" >
                            <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                            <Heading as="h4" size={'sm'}>{el.name}</Heading>
                            <Text>Price: {el.price}</Text>
                            <Text>{`Rating: ${el.rating}/5`}</Text>
                        </Box>
                    )) : womenData.salwar.map((el) => (
                        <Box key={el.id} textAlign="center" >
                            <Image display={'block'} m='auto' h="320px" src={el.image} ></Image>
                            <Heading as="h4" size={'sm'}>{el.name}</Heading>
                            <Text>Price: {el.price}</Text>
                            <Text>{`Rating: ${el.rating}/5`}</Text>
                        </Box>
                    ))

                }

            </SimpleGrid> */}

              <Box> {menData.Jeans.map((el) => {console.log(el)})}</Box>
               
           


            <ForthLast />
            <LargeWithLogoCentered />

            <SecondLast />
            <br />
            <LastFooter />
        </Box>