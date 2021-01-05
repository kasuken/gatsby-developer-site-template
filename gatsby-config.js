/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `John Doe`,
    author: `John Doe`,
    firstName: `John`,
    lastName: `Doe`,
    email: "johndoe@email.com",
    description: `John Doe's personal site`,
    occupation: `Software Engineer`,
    keywords: [`John`, `Doe`, `Personal`, `Blog`, `Resume`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    lookingForJobs: false,
    attributes: [
      `StackOverflow Addicted`,
      `Frontender`,
      `Java Hater`,
      `Firefox Fan`,
    ],
    links: [
      {
        title: `Linkedin`,
        prefix: `fab`,
        icon: `linkedin`,
        link: `https://www.linkedin.com`,
      },
      {
        title: `Github`,
        prefix: `fab`,
        icon: `github`,
        link: `https://www.github.com`,
      },
      {
        title: `Hackerrank`,
        prefix: `fab`,
        icon: `hackerrank`,
        link: `https://www.hackerrank.com`,
      },
      {
        title: `Mail`,
        prefix: `fas`,
        icon: `envelope`,
        link: `mailto:johndoe@outlook.com`,
      },
      {
        title: `Resume`,
        prefix: `fas`,
        icon: `file-alt`,
        link: `../../resume.pdf`,
      }
    ],
    technlogiesList: [
      {
        name: `React`,
        link: `https://reactjs.org`,
      },
      {
        name: `ASP.NET Core`,
        link: `https://www.asp.net`,
      },
      {
        name: `C#`,
        link: `https://www.dot.net`,
      },
      {
        name: `Python`,
        link: `https://www.python.org`,
      },
    ],
    toolsList: [
      {
        name: `Visual Studio Code`,
        link: `https://code.visualstudio.com`,
      },
      {
        name: `Visual Studio 2019`,
        link: `https://www.visualstudio.com`,
      },
      {
        name: `Postman`,
        link: `https://www.getpostman.com`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `John Doe's Personal Site`,
        short_name: `J.Doe`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
}
