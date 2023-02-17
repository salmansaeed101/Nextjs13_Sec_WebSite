'use client'

import { Box, Button, Container, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Home from '../components/Home'
import Instructors from '../components/Instructors'


export default function page() {
  return ( <>
    <Home title='About' src='https://www.awfis.com/images/explore_workspace/enterprise4.jpg'/>
<Box>
<Container maxW={1400}>
<Flex my='50px' px='50px' display={{lg:'flex', base:'grid'}}>
<Box flexBasis='50%'  >
  <Image  src='/pre.jpg' alt='President' width='400' height='400'  />
</Box>
<Box flexBasis='50%'>
  <Heading>
  Dr. Arif Alvi
  </Heading>
  <Text mt='5px'>
  Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”.
   He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.
  </Text>
  <Text mt='5px'>
  President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013).
   Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. 
  He is also an author of a book, theses, and many articles.


  </Text>
  <Box m={3} >
  <Button bg={'teal'} color='white'>More</Button>

  </Box>
</Box>



</Flex>


</Container>


</Box>
<Box>
<Container maxW={1400}>
<Flex my='50px' px='50px' display={{lg:'flex', base:'grid'}}>

<Box flexBasis='50%' >
  <Heading>
  Dr. Arif Alvi
  </Heading>
  <Text mt='5px'>
  President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.
  </Text>
  <Text mt='5px'>
  
  Dr. Arif Alvi’s political career commenced with his pro-democracy struggle against the dictatorship of General Ayub Khan. He is a founding member of Pakistan Tehreek-e-Insaf (PTI) that came into being in 1996. He remained a member of the PTI’s Central Executive Committee since its inception and has held the offices of PTI President of Sindh (1997-2001), Central Vice President (2001-2006) and Secretary General (2006-2013). In line with Constitution of Pakistan, he resigned from all the positions of PTI before assuming the prestigious office of the President.


  </Text>
</Box>
<Box flexBasis='50%'  m='auto' ml='200px' >
  <Image  src='/newlogo.png' alt='President' width="300" height='200'  />
</Box>



</Flex>


</Container>


</Box>

<Box>
<Container maxW={1400}>
  <Grid placeItems={'center'} >
<Heading >
  Sir Zia Khan
  </Heading>
  </Grid>
<Flex my='50px' px='50px' display={{lg:'flex', base:'grid'}}>

<Box flexBasis='50%'  >
  <Image  src='data:image/jpeg;base64,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' alt='Sir Zia Khan' width='500' height='400'  />
</Box>
<Box flexBasis='50%'>
  
  <Text mt='5px'>
  CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education. Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development. Expert in concept, business modeling & strategy development for startups, specializing in DeFi and token economics. Mentored and trained hundreds of thousands of developers. Triple masters degrees in business administration, engineering, and finance from Arizona State University. Master in Economics from KU. Certified Public Accountant and Certified Management Accountant in USA.
  </Text>
  <Text mt='5px'>
  
  </Text>
 
</Box>

</Flex>
</Container>
</Box>

<Instructors/>
    </>
  )
}
