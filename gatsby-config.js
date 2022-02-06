module.exports = {
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `${__dirname}/src/pages/`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `blogs`,
          path: `${__dirname}/src/blogs/`,
        },
      },
      `gatsby-plugin-mdx`,
    ],
  }