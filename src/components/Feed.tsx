import {
  Box,
  Flex,
  Image,
  IconButton,
  Button,
  useColorModeValue,
  Icon,
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
  Input,
  Checkbox,
  useToast,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
// import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { FaHeart, FaPlusCircle, FaSearch, FaUpload } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const srces = [
  "https://sothebys-com.brightspotcdn.com/74/34/543925cf4281ba9fe0b774e76c85/gettyimages-1316606580.jpg",
  "https://www.studiosuits.com/cdn/shop/products/leather_suits_d84aeeff-9508-4438-9e4c-c7bfb5ecdb6c.jpg?v=1637654741",
  "https://cdn.shopify.com/s/files/1/0612/3670/7497/files/drbhsfrynjsty_beautiful_women_wearing_anarkali_suit_1c0b7355-9291-426a-9c03-e4e071bdc997_1024x1024.png?v=1674742110",
  "https://deih43ym53wif.cloudfront.net/kyoto-geisha-shutterstock_548562244_8a713110bd.jpeg",
  "https://www.demetrios.com/oasishoa/2020/07/Platinum-Wedding-Dresses-2020i.jpg",
  "https://www.districtofchic.com/wp-content/uploads/2019/10/districtofchic-graffitidress-31.jpg",
  "https://cdn.shopify.com/s/files/1/0249/3369/5573/files/Most-Expensive-Dog-Dresses-Furdrobe-dress-Canine-Couture.png?v=1574029296",
];

export default function Feed() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
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

  return (
    <Box
      w="100%"
      maxW="900px"
      mx="auto"
      sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
    >
      {srces.map((src) => (
        <Link to={`/image/${encodeURIComponent(src)}`}>
          <Image
            key={src}
            w="100%"
            borderRadius="xl"
            mb={2}
            display="inline-block"
            src={src}
            alt="Alt"
          />
        </Link>
      ))}

      {/* add post button */}

      <Modal size={"sm"} isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload a post</ModalHeader>
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>File</FormLabel>
              <Input p={1} type="file" onChange={handleFileChange} />
              {previewUrl && <Image src={previewUrl} mt={2} maxH="200px" />}
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={description}
                onChange={handleDescriptionChange}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Tags</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={FaSearch} color="gray.500" />}
                />
                <Input
                  type="text"
                  placeholder="Add a tag"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleTagAdd(e.currentTarget.value);
                      e.currentTarget.value = "";
                    }
                  }}
                />
              </InputGroup>
              <Flex flexWrap="wrap" mt={2}>
                {tags.map((tag) => (
                  <Tag
                    key={tag}
                    mr={2}
                    mb={2}
                    size="md"
                    variant="solid"
                    colorScheme="blue"
                  >
                    <TagLabel>{tag}</TagLabel>
                    <TagCloseButton onClick={() => handleTagRemove(tag)} />
                  </Tag>
                ))}
              </Flex>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleModalClose}>
              Cancel
            </Button>
            <Button colorScheme="green" onClick={handleModalClose}>
              Upload
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Add post button */}
      <Box position="fixed" bottom={4} right={4} zIndex={11}>
        <IconButton
          aria-label="Upload"
          icon={<FaUpload />}
          onClick={handleModalOpen}
        />
      </Box>
    </Box>
  );
}
