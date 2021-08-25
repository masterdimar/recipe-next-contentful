import {
    Box,
    Link,
    Heading,
    Text,
    Center,
  } from '@chakra-ui/react';

export default function Layout({ children }) {
    return (
      <Box className="layout">
        <header>
            <Center>
                <Link href="/">
                   <Heading>MASTER Recipe</Heading>            
                </Link>
            </Center>          
        </header>
  
        <Box className="page-content">
          { children }
        </Box>
  
        <footer>
            <Text>Copyright 2021 MASTER Recipe</Text>
        </footer>
      </Box>
    )
  }