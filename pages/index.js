import Head from 'next/head'
import AirbnbExample from '../components/AirbnbExample'
import { Container, Box, SimpleGrid, Center } from "@chakra-ui/react"

export default function Home() {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <AirbnbExample />

        <Container maxW="6xl"  borderRadius="base" border="1px" borderColor="gray.200">
          <Center bg="white" height="180px" m={2}>
            <Box padding="4" bg="gray.100" maxW="300px" my="24px">
              There are many benefits to a joint design and development system. Not only
              does it bring benefits to the design team.xx
            </Box>

          </Center>


          <SimpleGrid columns={[1, 2, 3, null, 4]} spacing={[2, null, 4, 6]}>
            <Center bg="tomato" height="80px">x</Center>
            <Center bg="red.800" color="white" height="80px">w</Center>
            <Center bg="tomato" height="80px">a</Center>
            <Center bg="teal.800" color="white" height="80px">TESTE</Center>
            <Center bg="tomato" height="80px">c</Center>
            <Center bg="tomato" height="80px">c</Center>
            <Center bg="tomato" height="80px">c</Center>
            <Center bg="tomato" height="80px">c</Center>
            <Center bg="tomato" height="80px">c</Center>
            <Center bg="tomato" height="80px">c</Center>
          </SimpleGrid>
        </Container>
    </div>
  )
}
