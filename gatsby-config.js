/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Esperanza Natalia",
    author: 'Esperanza Natalia González'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
      {
        resolve: `gatsby-plugin-facebook-pixel`,
        options: {
          pixelId: process.env.FB_PIXEL,
        },
      },
      {
        resolve: "gatsby-plugin-google-tagmanager",
        options: {
          id: process.env.TAG_MANAGER,
          // Include GTM in development.
          // Defaults to false meaning GTM will only be loaded in production.
          includeInDevelopment: true,
    
          // Specify optional GTM environment details.
          dataLayerName: "dataLayer",
        },
      },
  ]
}
