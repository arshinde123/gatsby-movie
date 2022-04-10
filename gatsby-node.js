// import * as path from 'path';
// import slash from 'slash';
// const path = require('path');
// const slash = require('slash');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })

  return graphql(`{
    allContentfulTeam {
      edges {
        node {
          slug
        }
      }
    }
  }`).then(result => {
    console.log(result.data.allContentfulTeam);
    console.log(result.data.allContentfulTeam.edges);
    if(result.errors) {
      return console.error("Error with contentful: ", result.errors);
    }

    // const templatePath = path.resolve('./src/templates/team.js');
    result.data.allContentfulTeam.edges.forEach(team => {
      createPage({
        path: `/teams/${team.node.slug}/`,
        component: require.resolve('./src/templates/teams.js'),
        context: {
          slug: team.node.slug
        }
      });
    });
  }).catch(error => console.error("Error: ", error));
}
