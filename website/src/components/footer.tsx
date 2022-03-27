import React from "react"
import {
  Flex,
  Icon,
  Text,
  Stack,
  Link,
  List,
  ListItem,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react"

type FooterLinkProps = {
  icon?: React.ElementType
  href?: string
  label?: string
}

const FooterLink: React.FC<FooterLinkProps> = ({ icon, href, label }) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="xl" color="gray.400" />
  </Link>
)


export const Footer = () => (
  <Flex
    justifyContent="space-between"
    alignItems="center"
    width="1440px"
    maxW="100%"
    mx="auto"
    boxSizing="border-box"
    flexDirection={{
      base: "column", xl:"row"
    }}
    px="0px"
    pb="20px"
    mt="60px"
  >
    <Text
      color="gray.400"
      textAlign={{
        base: "center",
        xl: "start",
      }}
      me="0px"
      mb={{
        base: "20px", xl:"0px"
      }}
    >
      &copy; 2022 <Text as="span">Horizon UI. All Rights Reserved. Made with love by</Text>
      <Link
        // color={linkTeal}
        color={useColorModeValue("gray.600", "white")}
        fontWeight="500"
        href="https://www.simmmple.com?ref=simmmple-pud"
        target="_blank"
      >
        {" "}
        Simmmple!
      </Link>
    </Text>
    <List display="flex">
      <ListItem
        me={{
          base: "20px",
          md: "24px",
        }}
      >
        <Link
          color={useColorModeValue("gray.400", "white")}
          href="https://blog.simmmple.com/?ref=horizon-documentation-pud"
        >
          Blog
        </Link>
      </ListItem>
      <ListItem>
        <Link
          color={useColorModeValue("gray.400", "white")}
          href="https://www.simmmple.com/licenses?ref=horizon-documentation-pud"
        >
          License
        </Link>
      </ListItem>
    </List>
  </Flex>
)

export default Footer
