import React from "react";
import EmailInput from "./EmailInput";
import { Flex, Heading, Text } from "@chakra-ui/react";

function Card() {
  return (
    <article style={{ backgroundColor: "white" }}>
      <Flex bgImage="url(/coming-soon/assets/images/bg-pattern-desktop.svg)">
        <div>
          <header>
            <img
              src="/coming-soon/assets/images/logo.svg"
              alt="Base Apparel Logo"
            ></img>
          </header>
          <Heading>We're coming soon</Heading>
          <Text>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </Text>
          <EmailInput />
        </div>
        <div>
          <img
            src="/coming-soon/assets/images/hero-desktop.jpg"
            alt="Woman modeling merchandise"
          ></img>
        </div>
      </Flex>
    </article>
  );
}

export default Card;
