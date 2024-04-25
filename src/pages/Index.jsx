// Complete the Index page component here
// Use chakra-ui
import { Box, Container, Heading, Text, SimpleGrid, Icon, Link } from "@chakra-ui/react";
import { FaGoogle, FaCloud, FaMailBulk, FaYoutube, FaReact, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub, FaTiktok } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" mb={6} textAlign="center">
        Tech Stack Overview
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {/* Analytics and Tracking */}
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading size="md">Analytics and Tracking</Heading>
          <Link href="#" isExternal>
            <Icon as={FaGoogle} /> Google Analytics
          </Link>
          <Text>Nov 2022 - Apr 2024</Text>
        </Box>

        {/* Application Performance */}
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading size="md">Application Performance</Heading>
          <Text>
            <Icon as={FaCloud} /> Cloudflare Rocket Loader
          </Text>
          <Text>Apr 2024 - Apr 2024</Text>
        </Box>

        {/* Marketing Automation */}
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading size="md">Marketing Automation</Heading>
          <Text>
            <Icon as={FaMailBulk} /> MailerLite
          </Text>
          <Text>Dec 2022 - Jan 2024</Text>
        </Box>

        {/* Video Platforms */}
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading size="md">Video Platforms</Heading>
          <Text>
            <Icon as={FaYoutube} /> YouTube
          </Text>
          <Text>Feb 2024 - Apr 2024</Text>
        </Box>

        {/* JavaScript Libraries */}
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading size="md">JavaScript Libraries</Heading>
          <Text>
            <Icon as={FaReact} /> React
          </Text>
          <Text>Nov 2022 - Apr 2024</Text>
        </Box>

        {/* Social Media Links */}
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading size="md">Social Media</Heading>
          <Link href="#" isExternal>
            <Icon as={FaLinkedin} /> LinkedIn
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaTwitter} /> Twitter
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaFacebook} /> Facebook
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaInstagram} /> Instagram
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaGithub} /> GitHub
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaTiktok} /> TikTok
          </Link>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;
