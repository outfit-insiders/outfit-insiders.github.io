import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Textarea,
  Tag,
  TagLabel,
  TagCloseButton,
  HStack,
  Image,
  Switch,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import {
  FaSearch,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaUpload,
  FaUsers,
} from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";

interface NavbarProps {
  onSearch: (query: string) => void;
}

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleTagAdd = (tag: string) => {
    setTags([...tags, tag]);
  };

  const handleTagRemove = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFile(null);
    setDescription("");
    setTags([]);
    setPreviewUrl(null);
  };

  function onSearch(value: string): void {
    throw new Error("Function not implemented.");
  }

  function handleLogout(): void {
    navigate("/");
  }

  return (
    <>
      <HStack
        bg={colorMode === "light" ? "gray.50" : "gray.700"}
        p={1}
        alignItems="center"
      >
        <Box flex="1" ml={1} width="44px" height="44px">
          <Link to="/feed">
            <Image
              src="logo.png"
              width="44px"
              height="44px"
              minWidth="44px"
              alt="Outfit Insight"
            />
          </Link>
        </Box>
        <Spacer />
        <Flex justifyContent="center" w="40%">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaSearch} color="gray.500" />}
            />
            <Input
              type="text"
              placeholder="Search"
              bg={colorMode === "light" ? "gray.200" : "gray.800"}
              onChange={(e) => onSearch(e.target.value)}
            />
          </InputGroup>
        </Flex>
        <Spacer />
        <Box pr={3}>
          <HStack spacing={2}>
            <Link to="/communities">
              <IconButton icon={<FaUsers />} aria-label="Users" mr={3} />
            </Link>
            <Menu size="sm">
              <MenuButton as={Avatar} size="sm" cursor="pointer" />
              <MenuList>
                <MenuItem onClick={() => navigate("/profile")}>
                  <Icon as={FaUser} mr={2} />
                  Profile
                </MenuItem>
                <MenuItem
                  icon={<FaSignOutAlt />}
                  fontSize="sm"
                  onClick={handleLogout}
                >
                  Logout
                </MenuItem>
                <MenuItem fontSize="sm">
                  Dark Mode
                  <Switch
                    ml="auto"
                    isChecked={colorMode === "dark"}
                    onChange={toggleColorMode}
                  />
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Box>
      </HStack>
      <Outlet />
    </>
  );
}
