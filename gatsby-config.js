module.exports = {
  siteMetadata: {
    title: `Gatsby custom site Starter`,
    description: `This custom site configuration for Gatsby projects that has the dependency files I usually need.`,
    author: `@alexspedroza`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `icons`,
      path: `${__dirname}/src/assets/icons`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `content`,
      path: `${__dirname}/src/content`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [], // TBD
    },
  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        color: `#0022ff`,
        theme_color: `#666666`,
        display: `minimal-ui`,
        icon: `src/assets/icons/favicon-16x16.png`, // This path is relative to the root of the site.
        icons: [{
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
        theme_color_in_head: false, // this avoids adding theme-color meta tag
        crossOrigin: `anonymous`, // `use-credentials` or `anonymous` change to use-credentials before deploy!!!!
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
