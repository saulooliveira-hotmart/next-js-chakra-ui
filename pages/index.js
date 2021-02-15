import React from 'react';
import Head from 'next/head';
import {
  Box, Center, Container, SimpleGrid,
} from '@chakra-ui/react';
// import AirbnbExample from '../components/AirbnbExample';
import InputsForm from '../components/inputs-form';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>

        <link
          href="/favicon.ico"
          rel="icon"
        />
      </Head>

      <Container>
        <InputsForm />
        <Box bg="tomato" ms={10} w="100%" p={4} color="white">
          This is the Box
        </Box>
      </Container>

    </div>
  );
}
