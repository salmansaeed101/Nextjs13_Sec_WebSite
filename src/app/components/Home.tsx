import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Home(hello:any) {
  return (
    <Box bgImg={hello.src} py='400px' bgSize='cover' bgAttachment='fixed'>
<Container maxW={500}>

<Heading  color='black'>{hello.title}</Heading>

</Container>

    </Box>
  )
}
