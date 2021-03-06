import { Box, Image, Button, Container, Heading, Grid, Badge, FormControl, Input } from "@chakra-ui/react";

import brandLogo from '../assets/brand-logo.svg'
import illustration from '../assets/illustration.svg';
import imageOne from '../assets/image-one.jpg';
import imageTwo from '../assets/image-two.jpg';
import imageThree from '../assets/image-three.jpg';
import rightArrow from '../assets/right-arrow.svg';


function header() {
    return (
        <>
            <header>
                <Box d="flex" justifyContent="space-between" alignItems="center" ml={6} mr={6}>
                    <Box>
                        <Image boxSize="90px" src={brandLogo} alt="Brand" />
                    </Box>
                    <Box>
                        <Button pr={3} colorScheme="gray.600" fontSize="sm" variant="link">
                            Log in
                        </Button>
                        <Button pr={3} colorScheme="gray.600" fontSize="sm" variant="link">
                            Sign up
                        </Button>
                    </Box>
                </Box>
            </header>

            {/* main punch line */}
            <Box>
                <Container maxWidth="container.xl">
                    <Box 
                        d="flex" 
                        alignItems="center" 
                        py="20" 
                        flexDirection={{
                            sm: "column",
                            md: "row",
                            lg: "row",
                            xl: "row",
                            base: "column"
                        }}
                    >
                        <Box mr="6">
                            <Heading as="h1" size="2xl">
                                <Box fontWeight="black">
                                    Dive in! There are so many things to do in Meetup
                                </Box>
                            </Heading>

                            <Box mt="6" fontWeight="medium">
                                Join a group to meet people, make friends, find support, grow a
                                business, and explore your interests. Thousands of events are
                                happening every day, both online and in person!
                            </Box>
                        </Box>

                        <Box w="100%">
                            <Image w="100%" src={illustration} alt="illustration"/>
                        </Box>
                    </Box>
                </Container>
            </Box>


            {/* three boxes  */}
            {/* could loop the images here in the Grid components if they are a lot */}

            <Container maxWidth="container.xl" mt={10}>
                <Grid 
                    templateColumns={{
                        sm: 'repeat(1, fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(2, 1fr)',
                        xl: 'repeat(3, 1fr)',
                        base: 'repeat(1, fr)'
                    }}
                    gap="6"
                >
                    <Box>
                        <Image w="100%" borderRadius="lg" src={imageOne} alt="image one of three"/>
                        <Button colorScheme="teal" variant="link" mt="5">
                            Make new friends <Image w="100%" ml="2" src={rightArrow} alt="right arrow" />
                        </Button>
                    </Box>
                    <Box>
                        <Image w="100%" borderRadius="lg" src={imageTwo} alt="image one of three"/>
                        <Button colorScheme="teal" variant="link" mt="5">
                            Explore the outdoors <Image w="100%" ml="2" src={rightArrow} alt="right arrow" />
                        </Button>
                    </Box>
                    <Box>
                        <Image w="100%" borderRadius="lg" src={imageThree} alt="image one of three"/>
                        <Button colorScheme="teal" variant="link" mt="5">
                            Make new friends
                            <Image w="100%" ml="2" src={rightArrow} alt="right arrow" />
                        </Button>
                    </Box>
                </Grid>
            </Container>

            {/* pills */}
            <Container maxW="container.xl">
                <Box 
                    direction="row" 
                    display="flex" 
                    flexWrap="wrap"
                    justifyContent="space-between"
                    my="10"
                >
                    <Badge
                        borderRadius="3xl"
                        px={4}
                        py={2}
                        mr="4"
                        mb="4"
                        textTransform="normal"
                        color="#ffffff"
                        bg="blue.100"
                    >
                        Boost your career
                    </Badge>
                    <Badge
                        borderRadius="3xl"
                        px={4}
                        py={2}
                        mr="4"
                        mb="4"
                        textTransform="normal"
                        color="#ffffff"
                        bg="blue.100"
                    >
                        Find your zen
                    </Badge>
                    <Badge
                        borderRadius="3xl"
                        px={4}
                        py={2}
                        mr="4"
                        mb="4"
                        textTransform="normal"
                        color="#ffffff"
                        bg="blue.100"
                    >
                        Share language + culture
                    </Badge>
                    <Badge
                        borderRadius="3xl"
                        px={4}
                        py={2}
                        mr="4"
                        mb="4"
                        textTransform="normal"
                        color="#ffffff"
                        bg="blue.100"
                    >
                        Read with friends
                    </Badge>
                    <Badge
                        borderRadius="3xl"
                        px={4}
                        py={2}
                        mr="4"
                        mb="4"
                        textTransform="normal"
                        color="#ffffff"
                        bg="blue.100"
                    >
                        Write together
                    </Badge>
                    <Badge
                        borderRadius="3xl"
                        px={4}
                        py={2}
                        mr="4"
                        mb="4"
                        textTransform="normal"
                        color="#ffffff"
                        bg="blue.100"
                    >
                        Hone your craft
                    </Badge>
                    <Badge
                        borderRadius="3xl"
                        px={4}
                        py={2}
                        mr="4"
                        mb="4"
                        textTransform="normal"
                        color="#ffffff"
                        bg="blue.100"
                    >
                        Get moving
                    </Badge>
                </Box>
            </Container>

            {/* Last header section */}
            <Container maxW="container.xl" mt="20">
                <Grid 
                    templateColumns={{
                        sm: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(2, 1fr)',
                        xl: 'repeat(2, 1fr)',
                        base: 'repeat(1, 1fr)',
                    }} 
                    gap={6}
                >
                    <Box>
                        <Heading as="h3" size="lg" mb="7">
                            What do you want to do?
                        </Heading>

                        <Box 
                            d="flex" 
                            alignItems="center" 
                            flexDirection={{
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                                base: 'column'
                            }} 
                            w="100%"
                        >
                            <Box 
                                flexBasis={{
                                    sm: '100%',
                                    md: '50%',
                                    lg: '50%',
                                    xl: '50%',
                                    base: '100%'
                                }}
                                w="100%" 
                                mr={{
                                    sm: '0',
                                    md: '2',
                                    lg: '2',
                                    xl: '2',
                                    base: '0'
                                }}
                            >
                                <FormControl id="email">
                                    <Box pos="relative">
                                        <Input
                                            placeholder="Search for 'tennis'"
                                            type="text"
                                            pl={'8'}
                                        ></Input>
                                        <Box pos="absolute" top="3" left="2">
                                            <svg
                                                xmins="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 20 20"
                                                fill="#d9d9d9"
                                            >
                                                <path 
                                                    fillRule="evenodd"
                                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </Box>
                                    </Box>
                                </FormControl>
                            </Box>

                            <Box flexBasis="50%" w="100%" ml="2">
                                <FormControl id="email">
                                    <Box pos="relative">
                                        <Input
                                            placeholder="Search for 'tennis'"
                                            type="text"
                                            pl={'8'}
                                        ></Input>

                                        <Box pos="absolute" top="3" left="2">
                                            <svg
                                                xmins="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 20 20"
                                                fill="#d9d9d9"
                                            >
                                                <path 
                                                    fillRule="evenodd"
                                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </Box>
                                    </Box>
                                </FormControl>
                            </Box>

                        </Box>

                        <Button
                            _hover={{ opacity: '0.8' }}
                            mt="5"
                            pt="6"
                            pb="6"
                            w="100%"
                            color="#ffffff"
                            bg="red.200"
                            fontSize="lg"
                        >
                            <Box fontWeight="black">Search</Box>
                        </Button>
                    </Box>

                    <Box>
                        <Heading as="h3" size="lg" mb="7">
                            See what???s happening
                        </Heading>
                        <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
                            <Badge
                                borderRadius="3xl"
                                px={5}
                                py={2}
                                mr="4"
                                mb="4"
                                color="#ffffff"
                                textTransform="normal"
                                bg="blue.100"
                            >
                                Starting soon
                            </Badge>
                            <Badge
                                borderRadius="3xl"
                                px={5}
                                py={2}
                                mr="4"
                                mb="4"
                                color="#ffffff"
                                textTransform="normal"
                                bg="blue.100"
                            >
                                Today
                            </Badge>
                            <Badge
                                borderRadius="3xl"
                                px={5}
                                py={2}
                                mr="4"
                                mb="4"
                                color="#ffffff"
                                textTransform="normal"
                                bg="blue.100"
                            >
                                Tomorrow
                            </Badge>
                            <Badge
                                borderRadius="3xl"
                                px={5}
                                py={2}
                                mr="4"
                                mb="4"
                                color="#ffffff"
                                textTransform="normal"
                                bg="blue.100"
                            >
                                This Week
                            </Badge>
                            <Badge
                                borderRadius="3xl"
                                px={5}
                                py={2}
                                mr="4"
                                mb="4"
                                color="#ffffff"
                                textTransform="normal"
                                bg="blue.100"
                            >
                                Online
                            </Badge>
                            <Badge
                                borderRadius="3xl"
                                px={5}
                                py={2}
                                mr="4"
                                mb="4"
                                color="#ffffff"
                                textTransform="normal"
                                bg="blue.100"
                            >
                                In person
                            </Badge>
                            <Badge
                                borderRadius="3xl"
                                px={5}
                                py={2}
                                mr="4"
                                mb="4"
                                color="#ffffff"
                                textTransform="normal"
                                bg="blue.100"
                            >
                                Trending near you
                            </Badge>
                        </Box>
                    </Box>
                </Grid>
            </Container>
        </>
    )
}

export default header;