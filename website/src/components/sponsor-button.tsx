import React from "react"
import { Box, BoxProps, Icon, useColorModeValue } from "@chakra-ui/react"
import siteConfig from "configs/site-config"
const cacat = useColorModeValue("red", "blue");
const DownloadButton = (props: BoxProps) => { (
  <Box
    display={{ base: "none", lg: "flex" }}
    alignItems="center"
    as="a"
    aria-label="Live Preview"
    href={siteConfig.freeDownload.url}
    target="_blank"
    borderWidth="1px"
    borderColor="#1B2559"
    px="24px"
    minH="48px"
    borderRadius="12px"
    fontSize="sm"
    color="#1B2559"
    outline="0"
    transition="all 0.3s"
    _hover={{
      bg: "gray.100",
      borderColor: "gray.300",
    }}
    _active={{
      borderColor: "gray.200",
    }}
    _focus={{
      boxShadow: "outline",
    }}
    {...props}
  >
    <Box as="strong" lineHeight="inherit" fontWeight="semibold">
      Live Preview
    </Box>
  </Box>
)}

export default DownloadButton
