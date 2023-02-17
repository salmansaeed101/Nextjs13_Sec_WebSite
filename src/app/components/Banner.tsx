"use client"

import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react"
import Image from 'next/image'
import bg1 from '../../../public/bg1.png'
import bg3 from '../../../public/bg3.png'
import bg2 from '../../../public/bg2.png'


export default function Banner() {
  return (  <>
    

<Box bgImage='https://4kwallpapers.com/images/walls/thumbs_3t/2287.png' bgSize={'cover'} bgAttachment={'fixed'} >
<Container maxW={1400} >
  <Flex pt={{lg:'150px', base:'30px'}} pb='40px' px={{lg:'40px',base:'10px'}}>
    <Box flexBasis='50%'>
    <Heading color={'white'}>Prepare your self for the Next Generation of Internet with Panaverse</Heading>
<Text color={'white'} pt={'10px'} pb={'10px'}>A One and Quarter Years Panaverse DAO Earn as you Learn Program
Getting Ready for the Next Generation of the Internet
</Text>
<Button color={'black'} size='lg' colorScheme='teal'>More Info</Button>

    </Box>
    <Box flexBasis='50%' pb={'40px'}>
<Image src={bg1} alt='Snap' width='800' height='500' />

    </Box>

</Flex>
</Container>

</Box>
<Box>
  <Container maxW={1400}>
<Flex gap='100px'>
<Box flexBasis='50%'pt={'30px'}>
<Image src={bg2} alt='Snap'  width='900' height='500' />

</Box>
<Box flexBasis='50%' >
<Heading size={'2xl'} pt={'20px'}>Program of Studies</Heading>
<Text pt={'20px'} pb={'20px'} pr='40px'>This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
</Text>
<Button pb={'20px'} mt='10px' size='lg' colorScheme='teal'color={'white'} >Read More</Button>

</Box>
</Flex>


  </Container>
</Box>


</>

      )
}
