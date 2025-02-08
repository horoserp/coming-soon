import React from "react";
import EmailInput from "./EmailInput";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

function Card() {
  return (
    <article>
      <Flex maxH={"800px"}>
        <Box
          bgImage="url(/coming-soon/assets/images/bg-pattern-desktop.svg)"
          bgColor={"white"}
          py={"66px"}
          pl={"169px"}
          pr={"220px"}
        >
          <header>
            <Image
              src="/coming-soon/assets/images/logo.svg"
              alt="Base Apparel Logo"
              mb={"138px"}
            ></Image>
          </header>
          <Heading
            as={"h1"}
            fontSize={"45px"}
            fontWeight={"600"}
            textTransform={"uppercase"}
            letterSpacing={"10px"}
            lineHeight={"1.2"}
            mb={"42px"}
          >
            <Text className="pink" fontWeight={"300"}>
              We're
            </Text>
            coming soon
          </Heading>
          <Text className="pink" lineHeight={"1.5"} mb={"50px"}>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </Text>
          <EmailInput />
        </Box>
        <Box>
          <Image
            src="/coming-soon/assets/images/hero-desktop.jpg"
            alt="Woman modeling merchandise"
          ></Image>
        </Box>
      </Flex>
    </article>
  );
}

export default Card;
