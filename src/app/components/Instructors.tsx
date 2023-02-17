import { Box, Center, Container, Heading, Image, Flex, Text} from '@chakra-ui/react'
import React from 'react'

import {data} from '../components/Database'

interface data {
  id:number,
  src:' ',
  heading:string,
  text:string
}

export default function Instructors() {
  return (  <>
  
  <Box>

<Container maxW={1400}>

<Center>
    <Heading>
Our Instructors

    </Heading>
</Center>
<Flex flexDir={'row'} >
    {data.map((ins)=>(
    <Box key={ins.id}>
    <Center>
<Image  alt='Sir Snap' borderRadius={'full'} height={100} width={100} src={ins.src}></Image>

    </Center>

<Heading textAlign={'center'}  size='md'   >{ins.heading}</Heading>
<Text textAlign={'center'} px='40px' fontSize='sm'>{ins.text}</Text>
</Box>
))}

</Flex>


</Container>



  </Box>
  
  
  
  </>
    
  )
}
