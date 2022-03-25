import {
  ArrowForwardIcon,
  ChevronDownIcon,
  EmailIcon,
  PhoneIcon,
  SearchIcon,
} from "@chakra-ui/icons"
import { Container, HStack, Stack } from "@chakra-ui/layout"
import * as React from "react"
import { FaFacebook, FaTwitter } from "react-icons/fa"
import { MdBuild, MdCall } from "react-icons/md"
import { BeatLoader } from "react-spinners"
import { Button, ButtonGroup, IconButton } from "../src"

export default {
  title: "Button",
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
}

export const basic = () => (
  <>
    <Button colorScheme="gray">Button</Button>
    <Button colorScheme="red">Button</Button>
    <Button colorScheme="green">Button</Button>
    <Button colorScheme="brand">Button</Button>
    <Button colorScheme="brand">Button</Button>
    <Button colorScheme="pink">Button</Button>
    <Button colorScheme="purple">Button</Button>
    <Button colorScheme="cyan">Button</Button>
    <Button colorScheme="orange">Button</Button>
    <Button colorScheme="yellow">Button</Button>
  </>
)

export const outlines = () => (
  <>
    <Button variant="outline" colorScheme="red">
      Button
    </Button>
    <Button variant="outline" colorScheme="green">
      Button
    </Button>
    <Button variant="outline" colorScheme="brand">
      Button
    </Button>
    <Button variant="outline" colorScheme="brand">
      Button
    </Button>
    <Button variant="outline" colorScheme="pink">
      Button
    </Button>
    <Button variant="outline" colorScheme="purple">
      Button
    </Button>
    <Button variant="outline" colorScheme="cyan">
      Button
    </Button>
    <Button variant="outline" colorScheme="orange">
      Button
    </Button>
    <Button variant="outline" colorScheme="yellow">
      Button
    </Button>
  </>
)

export const withVariants = () => (
  <HStack spacing="24px">
    <Button colorScheme="brand" variant="solid">
      Button
    </Button>
    <Button colorScheme="brand" variant="outline">
      Button
    </Button>
    <Button colorScheme="brand" variant="ghost">
      Button
    </Button>
    <Button colorScheme="brand" variant="link">
      Button
    </Button>
    <Button colorScheme="brand" variant="unstyled">
      Button
    </Button>
  </HStack>
)

export const withSizes = () => (
  <HStack>
    <Button colorScheme="brand" size="xs">
      Button
    </Button>
    <Button colorScheme="brand" size="sm">
      Button
    </Button>
    <Button colorScheme="brand" size="md">
      Button
    </Button>
    <Button colorScheme="brand" size="lg">
      Button
    </Button>
  </HStack>
)

export const WithIcon = () => (
  <Stack direction="row" spacing={4}>
    <Button leftIcon={<EmailIcon />} colorScheme="brand" variant="solid">
      Email
    </Button>
    <Button
      rightIcon={<ArrowForwardIcon />}
      colorScheme="brand"
      variant="outline"
    >
      Call us
    </Button>
  </Stack>
)

export const withReactIcons = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button leftIcon={<MdBuild />} colorScheme="pink" variant="solid">
      Settings
    </Button>
    <Button rightIcon={<MdCall />} colorScheme="brand" variant="outline">
      Call us
    </Button>
  </Stack>
)

export const WithLoading = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button size="lg" isLoading colorScheme="brand">
      Email
    </Button>

    <Button
      isLoading
      colorScheme="brand"
      spinner={<BeatLoader size={8} color="white" />}
    >
      Click me
    </Button>

    <Button
      isLoading
      loadingText="Submitting..."
      colorScheme="brand"
      variant="outline"
    >
      Submit
    </Button>
  </Stack>
)

export const WithLoadingSpinnerPlacement = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button
      isLoading
      loadingText="Loading"
      colorScheme="brand"
      variant="outline"
      spinnerPosition="start"
    >
      Submit
    </Button>
    <Button
      isLoading
      loadingText="Loading"
      colorScheme="brand"
      variant="outline"
      spinnerPlacement="end"
    >
      Continue
    </Button>
  </Stack>
)

export const withDisabled = () => (
  <HStack spacing="24px">
    <Button isDisabled colorScheme="brand" variant="solid">
      Button
    </Button>
    <Button isDisabled colorScheme="brand" variant="outline">
      Button
    </Button>
    <Button isDisabled colorScheme="brand" variant="ghost">
      Button
    </Button>
    <Button isDisabled colorScheme="brand" variant="link">
      Button
    </Button>
  </HStack>
)

export const customComposition = () => (
  <Button
    size="md"
    height="48px"
    width="200px"
    border="2px solid"
    borderColor="green.500"
  >
    Button
  </Button>
)

export const iconButton = () => (
  <Stack direction="row">
    <IconButton aria-label="Search database" icon={<SearchIcon />} />

    <IconButton
      colorScheme="brand"
      aria-label="Search database"
      icon={<SearchIcon />}
    />

    <IconButton colorScheme="brand" aria-label="Call Segun" size="lg">
      <PhoneIcon />
    </IconButton>
  </Stack>
)

export const WithButtonGroup = () => (
  <ButtonGroup variant="outline">
    <Button colorScheme="brand">Save</Button>
    <Button>Cancel</Button>
  </ButtonGroup>
)

export const attachedButtons = () => (
  <ButtonGroup size="sm" isAttached variant="outline">
    <Button marginEnd="-px">Save</Button>
    <IconButton
      fontSize="2xl"
      aria-label="Add to friends"
      icon={<ChevronDownIcon />}
    />
  </ButtonGroup>
)

export const socialButton = () => (
  <Stack direction="row">
    <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
      Facebook
    </Button>
    <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
      Twitter
    </Button>
  </Stack>
)
