// Complete the Index page component here
// Use chakra-ui
import { Box, Container, Heading, Text, SimpleGrid, Icon, Link, Button, AspectRatio } from "@chakra-ui/react";
import React from 'react';
import { FaGoogle, FaCloud, FaMailBulk, FaYoutube, FaReact, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub, FaTiktok } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" mb={6} textAlign="center">
        Interactive Tech Stack Simulation
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading size="md">Submit a Test Email</Heading>
          <Button leftIcon={<FaMailBulk />} colorScheme="teal" variant="solid">
            Send with MailerLite
          </Button>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading size="md">Watch a Video</Heading>
          <AspectRatio maxW="560px" ratio={1}>
            <iframe title="YouTube video player" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen />
          </AspectRatio>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading size="md">React Version</Heading>
          <Text>Using React {React.version}</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;
