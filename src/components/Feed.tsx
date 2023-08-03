import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  IconButton,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  imageUrl: string;
  title: string;
  date: string;
  description: string;
  college: string;
}

interface FeedProps {
  posts: Post[];
}

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
    </Box>
  );
}

{
  /* {posts.map((post) => (
        <Box key={post.id} bg="white" boxShadow="md" p={4} mb={4} maxW="600px" mx="auto">
          <Flex alignItems="center">
            <Image src={post.imageUrl} alt={post.title} boxSize="300px" objectFit="cover" mr={4} />
            <Box>
              <Heading size="md" mb={2}>{post.title}</Heading>
              <Text fontSize="sm" color="gray.500" mb={2}>{post.date}</Text>
              <Text fontSize="md">{post.description}</Text>
              <Badge colorScheme="green" mt={2}>{post.college}</Badge>
            </Box>
            <Spacer />
            <IconButton aria-label="Like" icon={<FaHeart />} />
          </Flex>
        </Box>
      ))} */
}
