"use client"

import { Box, Button, Container, Flex, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/logo.png'

export default function Header() {
  return ( <>
   <Box boxShadow={'lg'}>
    <Container maxW={'1400px'}>
        <SimpleGrid templateColumns='repeat(3, 1fr )'>

<Box>
    <Image src={logo} alt='Logo' width={'100'} height={'100'} ></Image>
</Box>
<Flex gap={10} color={"black"} fontSize={20}
 fontWeight={"semibold"}
  placeItems={"center"}
  >
    <Link href={"/"}>Home</Link>
    <Link href={"/about"}>About</Link>
    <Link href={"/contact"}>Contact</Link>
    <Link href={"syllabus"}>Syllabus</Link>

</Flex>
<Box>
<Button size={"lg"} float={'right'}colorScheme={"teal"} >Apply</Button>
</Box>

        </SimpleGrid>
    </Container>
   </Box>

</>
  )
}
