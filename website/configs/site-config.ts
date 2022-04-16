const baseUrl = "https://github.com/horizon-ui/horizon-ui-chakra/"

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Horizon UI. All Rights Reserved.`,
  algolia: {
    apiKey: "655968634437471",
    indexName: "horizon-ui-chakra",
    inputSelector: "#algolia-search",
  },
  author: {
    name: "Horizon",
    github: "https://github.com/horizon-ui",
    twitter: "https://twitter.com/simmmple_web",
    email: "",
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/website/pages`,
    blobUrl: `${baseUrl}/blob/main`,
  },
  livePreview: {
    url: "https://live.horizon-ui.com/horizon-ui-chakra/",
  },
  seo: {
    title: "Horizon UI - Trendiest Open Source Admin Template for React",
    titleTemplate: "%s",
    description:
      "Start building your dashboard with Horizon UI, the most trendiest Open Source free Admin Dashboard for Chakra UI, React and Figma!",
    siteUrl: "https://horizon-ui.com/",
    twitter: {
      handle: "@simmmple",
      site: "@simmmple",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://horizon-ui.com/",
      title: "Horizon UI Dashboard",
      description:
        "Horizon UI - Trendiest Open Source Admin Template for React",
      site_name:
        "Start building your dashboard with Horizon UI, the most trendiest Open Source free Admin Dashboard for Chakra UI, React and Figma!",
      images: [
        {
          url: "https://i.ibb.co/fdyTwz1/introduction-image-2.png",
          width: 1240,
          height: 480,
          alt:
            "Start building your dashboard with Horizon UI, the most trendiest Open Source free Admin Dashboard for Chakra UI, React and Figma!",
        },
        {
          url: "https://i.ibb.co/fdyTwz1/introduction-image-2.png",
          width: 1012,
          height: 506,
          alt:
            "Start building your dashboard with Horizon UI, the most trendiest Open Source free Admin Dashboard for Chakra UI, React and Figma!",
        },
      ],
    },
  },
}

export default siteConfig
