import { useState } from "react";
import {
  Image,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Heading,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function ImageReview() {
  const [sliderValue, setSliderValue] = useState(50);
  const { imageUrl } = useParams<{ imageUrl: string }>();

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <Flex flexWrap="wrap">
      <Image
        src={decodeURIComponent(imageUrl || "")}
        alt="Placeholder image"
        w={["100vw", "50vw"]}
        cursor="pointer"
        p={5}
      />
      <Box p={5}>
        <Text fontSize="xl" fontWeight="bold">
          How much do you like this image?
        </Text>
        <br />
        <Slider
          w={["90vw", "40vw"]}
          aria-label="slider-ex-6"
          onChange={(val) => setSliderValue(val)}
        >
          <SliderMark value={30} {...labelStyles}>
            3
          </SliderMark>
          <SliderMark value={50} {...labelStyles}>
            5
          </SliderMark>
          <SliderMark value={70} {...labelStyles}>
            7
          </SliderMark>
          <SliderMark
            value={sliderValue}
            textAlign="center"
            bg="blue.500"
            color="white"
            mt="-10"
            ml="-5"
            w="12"
          >
            {sliderValue / 10}
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>

      <Box p={5}>
        <Heading size="xl">Community Score: 5.5</Heading>

        <Stack
          direction={{ base: "column", md: "row" }}
          // spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Amazing for the cost</TestimonialHeading>
              <TestimonialText>
                For just $30 this was an absolute bargain
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Laura Braddick"}
              title={"Verified"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Intuitive Design</TestimonialHeading>
              <TestimonialText>
                This fit well for me
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Adi"}
              title={"Verified"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Wasn't the best</TestimonialHeading>
              <TestimonialText>
                Seems not colorful enough
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Gianna"}
              title={""}
            />
          </Testimonial>
        </Stack>
      </Box>
    </Flex>
  );
}

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props: Props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};
