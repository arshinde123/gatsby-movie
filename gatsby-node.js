exports.createPages = async ({ graphql, actions }) => {
  console.log(JSON.stringify(actions));
  const { createPage } = actions;
  return graphql(`{
    allContentfulMovie {
      edges {
        node {
          slug
          title
          poster
          releaseDate
          genres
          overview {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }`).then(result => {
    if(result.errors) {
      return console.error("Error with contentful: ", result.errors);
    }

    console.log("result: -- ", result.data.allContentfulMovie.edges[0].node.overview)

    createPage({
      path: `/movies/`,
      component: require.resolve('./src/templates/movies.js'),
      context: {
        // result: result.data.allContentfulMovie.edges
      }
    });
  }).catch(error => console.error("Error: ", error));
}
