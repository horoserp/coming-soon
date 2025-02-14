import React from "react";
import EmailInput from "./EmailInput";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

function Card() {
  return (
    <Box as="article">
      <Flex maxW={1440} maxH={800} direction={{ base: "column", lg: "row" }}>
        <Box
          bgImage="url(/coming-soon/assets/images/bg-pattern-desktop.svg)"
          bgColor={"white"}
          maxW={830}
          py={{ base: 7, lg: 66 }}
          pl={{ base: 0, lg: 169 }}
          pr={{ base: 0, lg: 220 }}
        >
          <header>
            <Image
              src="/coming-soon/assets/images/logo.svg"
              alt="Base Apparel Logo"
              w={120}
              mb={{ base: 7, lg: 138 }}
              ml={{ base: 10, lg: 0 }}
            ></Image>
          </header>
          <Flex justifyContent={"center"}>
            <Image
              display={{ base: "block", lg: "none" }}
              maxW={375}
              mb={10}
              src="/coming-soon/assets/images/hero-mobile.jpg"
              alt="Woman modeling merchandise"
            ></Image>
          </Flex>
          <Heading
            as={"h1"}
            fontSize={50}
            fontWeight={600}
            textTransform={"uppercase"}
            letterSpacing={10}
            lineHeight={{ base: 1, lg: 1.2 }}
            textAlign={{ base: "center", lg: "left" }}
            mb={{ base: "26px", lg: 42 }}
          >
            <Text className="pink" fontWeight={300}>
              We're
            </Text>
            coming soon
          </Heading>
          <Text
            className="pink"
            lineHeight={1.5}
            px={{ base: 5, lg: 0 }}
            mb={50}
            textAlign={{ base: "center", lg: "left" }}
          >
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </Text>
          <EmailInput />
        </Box>
        <Box>
          <Image
            display={{ base: "none", lg: "block" }}
            h={800}
            minW={610}
            src="/coming-soon/assets/images/hero-desktop.jpg"
            alt="Woman modeling merchandise"
          ></Image>
        </Box>
      </Flex>
    </Box>
  );
}

export default Card;
