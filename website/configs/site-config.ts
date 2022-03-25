const baseUrl = "https://github.com/simmmple-web/horizon-ui-dashboard"

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Horizon UI. All Rights Reserved.`,
  algolia: {
    apiKey: "655968634437471",
    indexName: "horizon-ui-dashboard",
    inputSelector: "#algolia-search",
  },
  author: {
    name: "Simmmple",
    github: "https://github.com/simmmple-web",
    twitter: "https://twitter.com/simmmple_web",
    email: "",
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/website/pages`,
    blobUrl: `${baseUrl}/blob/main`,
  },
  freeDownload: {
    url:
      "https://www.horizon-ui.com/#pricing?ref=docs-pud",
  },
  youtube: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
  seo: {
    title: "Horizon UI Documentation",
    titleTemplate: "%s - Horizon UI Documentation",
    description:
      "Simple, Modular and Accessible UI Components for your React Applications.",
    siteUrl:
      "https://www.creative-tim.com/product/horizon-ui-dashboard?ref=docs-pud",
    twitter: {
      handle: "@simmmple",
      site: "@simmmple",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.horizon-ui.com?ref=docs-pud",
      title: "Horizon UI Dashboard",
      description:
        "Horizon UI Dashboard is a beautiful Chakra UI ReactJS admin dashboard with a large number of components, designed to look beautiful, clean and organized. If you are looking for a tool to manage dates about your business, this dashboard is the thing for you.",
      site_name:
        "Most trendiest, complex and innovative Premium Dashboard for React. Check Horizon UI Dashboard based on Chakra UI.",
      images: [
        {
          url:
            "https://i.ibb.co/7NXMZQS/Cover-Horizon-Chakra-FREE-Thumbnail.png",
          width: 1240,
          height: 480,
          alt:
            "Most trendiest, complex and innovative Premium Dashboard for React. Check Horizon UI Dashboard based on Chakra UI.",
        },
        {
          url:
            "https://i.ibb.co/7NXMZQS/Cover-Horizon-Chakra-FREE-Thumbnail.png",
          width: 1012,
          height: 506,
          alt:
            "Most trendiest, complex and innovative Premium Dashboard for React. Check Horizon UI Dashboard based on Chakra UI.",
        },
      ],
    },
  },
}

export default siteConfig
