"use client";

import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function Communities() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Communities Coming Soon!
      </Heading>
      <Text color={"gray.500"}>
        We will link different colleges and fashion brand fans here
      </Text>
      <br />

      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
    </Box>
  );
}
