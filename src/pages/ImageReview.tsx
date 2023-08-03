import { useState } from "react";
import { Image, Box, Flex, Text, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function ImageReview() {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [rating, setRating] = useState(0);

  const { imageUrl } = useParams<{ imageUrl: string }>();

  const handleImageClick = () => {
    setIsEnlarged(true);
  };

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  return (
    <Box>
      <Box justifyContent="left" alignItems="center" width={"100vw"}>
        <Image
            src={decodeURIComponent(imageUrl || "")}
          alt="Placeholder image"
          onClick={handleImageClick}
          cursor="pointer"
        />
      </Box>
      {isEnlarged && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundColor="rgba(0, 0, 0, 0.8)"
          zIndex="999"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            maxWidth="80%"
            maxHeight="80%"
            overflow="auto"
            backgroundColor="white"
            padding="4"
            borderRadius="md"
            boxShadow="md"
          >
            <Image
              src="https://via.placeholder.com/500x500.png"
              alt="Placeholder image"
              width="100%"
              maxHeight="80vh"
            />
            <Box mt="4">
              <Text fontSize="xl" fontWeight="bold" mb="2">
                Rate this image
              </Text>
              <Flex alignItems="center">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Button
                    key={value}
                    variant={rating === value ? "solid" : "outline"}
                    colorScheme="blue"
                    size="sm"
                    onClick={() => handleRatingChange(value)}
                    mr="2"
                  >
                    {value}
                  </Button>
                ))}
              </Flex>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
