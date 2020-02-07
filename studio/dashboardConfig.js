export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3d8f25be82d29db876574b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8z92qc2a',
                  apiId: 'cf861dd9-e3b4-49ef-b655-bcb3cf071bb9'
                },
                {
                  buildHookId: '5e3d8f25e3660f543f5c575b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-grehs985',
                  apiId: 'f6f351e9-4941-4513-9d7d-8f09d4c35ac0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ecogit/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-grehs985.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
