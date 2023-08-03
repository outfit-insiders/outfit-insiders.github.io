import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  chakra,
  useToast,
  Image,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaUserAlt, FaLock } from "react-icons/fa";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function Login() {
  // Variables ----------------------------------------------------------------------
  // navigates to calendar page if authenticated
  const navigate = useNavigate();

  //For Supabase
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Showing Password
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  //ChakraUI
  const toast = useToast();

  // useEffect ----------------------------------------------------------------------

  const handleSubmit = async function (event: React.SyntheticEvent) {
    navigate("/feed");
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      <Box>
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Image src="logo.png" alt="Logo" boxSize="80px" />
          <Box>
            <form onSubmit={handleSubmit}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor={"black.400"}
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    {/* Email */}
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      _autofill={{ backgroundColor: "transparent" }}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" color="gray.300">
                      <CFaLock color="gray.300" />
                    </InputLeftElement>
                    {/* Password */}
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={handleShowClick}
                        bg={"whiteAlpha.300"}
                        _hover={{ backgroundColor: "whiteAlpha.400" }}
                      >
                        {showPassword ? "hide" : "show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right">
                    <Link to="/resetpassword">Forgot password?</Link>
                  </FormHelperText>
                </FormControl>
                <Button
                  borderRadius={5}
                  type="submit"
                  variant="solid"
                  width="full"
                  bg={"gray.200"}
                >
                  Login
                </Button>
                <Button
                  w={"full"}
                  maxW={"md"}
                  variant={"solid"}
                  leftIcon={<FcGoogle />}
                  bg={"blackAlpha.100"}
                //   onClick={handleGoogleLogin}
                >
                  <Center>
                    <Text>Sign in with Google</Text>
                  </Center>
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Box>
      <Box>
        New Here? <Link to="/signup">Sign Up</Link>
      </Box>
    </Flex>
  );
}
