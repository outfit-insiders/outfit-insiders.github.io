import {
    Box,
    Flex,
    Stack,
    VStack,
    Text,
    Button,
    Image,
    Avatar,
    Heading,
    useColorModeValue,
    Badge,
    IconButton,
  } from "@chakra-ui/react";
  import { Link, useNavigate } from "react-router-dom";
  import {
    FaDiscord,
    FaFacebookSquare,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaTiktok,
  } from "react-icons/fa";
  
  // edit this file to change the content of the beta page
  import { contents } from "../components/BetaContent";
  import { useEffect } from "react";
  
  export default function BetaPage() {
    // Variables ----------------------------------------------------------------------
    const navigate = useNavigate();
  
    return (
      <Box position="relative">
        {/* 1st Page */}
        <Image src="beta2.jpg" width="100vw" />
        <Stack
          position="absolute"
          top={0}
          left={0}
          justifyContent={"center"}
          h={"100vh"}
          w={"100vw"}
          pl={5}
          pr={5}
        >
          {/* <Box
            fontSize={["60px", "80px", "120px"]}
            fontWeight="700"
            lineHeight="1.1"
            style={{ color: "black" }}
          >
            Outfit Insider
          </Box>
          <Box lineHeight="1.7" style={{ color: "black" }}>
            Establishing an unbiased platform for communities to review, share,
            and analyze purchases transparently.
          </Box> */}
        </Stack>
        {/*keep this to allow the first page to actually take space*/}
        {/* 2nd page */}
        <Stack direction={["column", null, "row"]} p={2}>
          <VStack
            height="100vh"
            alignItems={["center", null, "flex-start"]}
            justifyContent="center"
            textAlign={["center", null, "left"]}
            p={4}
          >
            <Image src="logo_laura.jpg" alt="outfit insider Logo" display="block" mx="auto" />
            <Box fontSize={["30px", "4xl"]} fontWeight="700" lineHeight="1.1">
              What does Outfit Insider solve?
            </Box>
            <Text>
              To consumers retailer fashion reviews are not widely honest or
              reliable.
            </Text>
          </VStack>
  
          <VStack spacing="2rem" pt="2rem" pb="2rem">
            {contents.map((vstack, index) => (
              <VStack key={index}>
                <Flex width="100%" alignItems="center">
                  <Box p=".3rem 1rem" fontWeight="600">
                    {vstack.number}
                  </Box>
                  <Box fontWeight="600" pl="20px">
                    {vstack.title}
                  </Box>
                </Flex>
                <Box p=".3rem 1rem">{vstack.text}</Box>
              </VStack>
            ))}
          </VStack>
        </Stack>
        {/* Footer */}
        <Stack direction={["column", null, "row"]} p={2}>
          <Stack direction={"row"} mt={4} ml={4} mr={4}>
            <IconButton
              as="a"
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              icon={<FaDiscord />}
            />
            <IconButton
              as="a"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              icon={<FaFacebookSquare />}
              mr={2}
            />
            <IconButton
              as="a"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              icon={<FaInstagram />}
              mr={2}
            />
            <IconButton
              as="a"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              icon={<FaTwitter />}
              mr={2}
            />
            <IconButton
              as="a"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              icon={<FaYoutube />}
              mr={2}
            />
            <IconButton
              as="a"
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              icon={<FaTiktok />}
            />
          </Stack>
  
          <Box p={4} ml={"auto"}>
            <Text>Copyright 2023. All Rights Reserved.</Text>
            <Link to={"privatepolicy"} style={{ fontWeight: "bold" }}>
              Private Policy
            </Link>
          </Box>
        </Stack>
        {/* Button to Login (must be rendered last to be on top)*/}
        <Button
          as={Link}
          to="/login"
          position="fixed"
          top={4}
          right={120}
          style={{ opacity: 0.8, backgroundColor: "rgba(0,0,0)" }}
          textColor="white"
        >
          Login
        </Button>
        <Button
          as={Link}
          to="/signup"
          position="fixed"
          top={4}
          right={4}
          style={{ opacity: 0.8, backgroundColor: "rgba(0,0,0)" }}
          textColor="white"
        >
          Sign Up
        </Button>

        <Button
          as={Link}
          to="/beta"
          position="fixed"
          bottom={4}
          right={4}
          style={{ opacity: 0.8, backgroundColor: "rgba(0,0,0)" }}
          textColor="white"
        >
          Link to old beta page
        </Button>
      </Box>
    );
  }
  