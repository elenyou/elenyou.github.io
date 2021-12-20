module.exports = {
    siteMetadata: {
      description: "Frontend Developer from London, Ontario, Canada.",
      locale: "en",
      title: "Lena Ovcharenko. Frontend Developer",
      formspreeEndpoint:"https://formspree.io/f/xknynavy",
    },
    plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          basePath: "/",
          contentPath: "content/",
          showThemeLogo: false,
          theme: {
            'back': '#161b23',
            'front': '#9dadc5',
            'lead': '#91e12a',
            'lead-text': '#161b23',
            'line': '#28303c',
            'skill-1': '#25a55f',
            'skill-2': '#9bdf46',
            'skill-3': '#e9f679',
            'skill-4': '#e9f679',
            'skill-5': '#9bdf46',
            'skill-6': '#25a55f',
          },
        },
      },
    ],
  }