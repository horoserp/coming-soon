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
          py={66}
          pl={169}
          pr={220}
        >
          <header>
            <Image
              src="/coming-soon/assets/images/logo.svg"
              alt="Base Apparel Logo"
              mb={138}
            ></Image>
          </header>
          <Heading
            as={"h1"}
            fontSize={50}
            fontWeight={600}
            textTransform={"uppercase"}
            letterSpacing={10}
            lineHeight={1.2}
            mb={42}
          >
            <Text className="pink" fontWeight={300}>
              We're
            </Text>
            coming soon
          </Heading>
          <Text className="pink" lineHeight={1.5} mb={50}>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </Text>
          <EmailInput />
        </Box>
        <Box>
          <Image
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
