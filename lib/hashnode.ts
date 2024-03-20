import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://gql.hashnode.com',
  cache: new InMemoryCache(),
});

export async function getHashnodePosts() {
  const { data } = await client.query({
    query: gql`
      query {
        publication(host: "yashdevsimple.hashnode.dev") {
          isTeam
          title
          posts(first: 10) {
            edges {
              node {
                title
                brief
                url
                coverImage {
                  url
                }
                publishedAt
              }
            }
          }
        }
      }
    `,
  });

  return data.publication.posts;
}
