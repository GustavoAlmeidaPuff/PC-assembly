import React from 'react';
import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4} color="white">
      <Flex h={16} alignItems="center" maxW="container.xl" mx="auto">
        <Link to="/">
          <Heading size="md">PC Assembly Builder</Heading>
        </Link>
        <Spacer />
        <Button variant="ghost" mr={3}>
          Meus Builds
        </Button>
        <Button variant="outline">
          Compatibilidade
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar; 