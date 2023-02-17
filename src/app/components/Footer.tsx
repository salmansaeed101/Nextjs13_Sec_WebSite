"use client"

import { Grid, Text } from "@chakra-ui/react"
import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logo.png"




export default function Footer() {
  return (
    <Box bg={'black'}>
<Container maxW={1400}>

<SimpleGrid templateColumns={{base:'repeat(2,1fr)', lg:'repeat(4,1fr)'}} py={20} >

<Box color={'white'}>
  <Grid placeItems={"center"}>
  <Heading >About Us</Heading>
  <Image src={logo} alt={"logo"} height={50} width={50}></Image>
  <Text> The future of the Web is web 3.0</Text>
  </Grid>
</Box>

<Box color={'white'}>
  <Grid placeItems={'center'}>
  <Heading >Useful Links</Heading>
  
<Link href='/'>Home</Link>
<Link href='/'>Syllabus</Link>
<Link href='/'>About</Link>
<Link href='/'>Contact</Link>

</Grid>
  
</Box>
<Box color={'white'}>
  <Grid placeItems={'center'}>
  <Heading>Follow Us</Heading>
  
<Link href='/'>FaceBook</Link>
<Link href='/'>LinkdIn</Link>
<Link href='/'>Twitter</Link>
<Link href='/'>YouTube</Link>


  </Grid>
  </Box>
<Box color={'white'}>
  <Grid placeItems={'center'} >
  <Heading>Contact Us</Heading>
  <Link href={'/'} >092 1234 5678</Link>
  <Link href={'/'}>abc@gmail.com</Link>
  <Link href={'/'}>Lahore, Pakistan</Link>

  </Grid>
</Box>



</SimpleGrid>


</Container>



    </Box>
  )
}
