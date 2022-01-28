module.exports = {
  siteMetadata: {
    siteUrl: 'https://flochjs.com',
    title: 'My Resume',
    description:
      'FLOCHJS is a Full Stack Javascript Software Engineer company based in Paris',
    author: 'flochjs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-webpack-bundle-analyser-v2',
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/langs`,
        // supported language
        languages: ['en', 'fr', 'ko'],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
        // option for use / as defaultLangauge root path. if your defaultLanguage is `ko`, when `redirectDefaultLanguageToRoot` is true, then it will not generate `/ko/xxx` pages, instead of `/xxx`
        redirectDefaultLanguageToRoot: false,
        // paths that you don't want to genereate locale pages, example: ["/dashboard/","/test/**"], string format is from micromatch https://github.com/micromatch/micromatch
        ignoredPaths: [],
        // option to fallback to the defined language instead of the `defaultLanguage` if the user langauge is not in the list
        fallbackLanguage: `en`,
      },
    },
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Portfolio`,
        short_name: `Resume`,
        description: `Interactive resume`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/logo.png`,
        icons: [
          {
            purpose: 'maskable',
            src: `/src/images/logo-700x700.png`,
            sizes: `700x700`,
            type: `image/png`,
          },
          {
            src: `src/images/logo-250x250.png`,
            sizes: `250x250`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
  ],
};
