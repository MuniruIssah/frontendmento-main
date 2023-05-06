/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `frontendmento-main`,
    siteUrl: `https://frontendmento-main.vercel.app/`,
  },
  plugins: [
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          "icon": "src/images/icon.png"
        },
      },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-postcss'
  ],
}
