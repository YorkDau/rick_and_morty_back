import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Character" type defines the queryable fields for every character in our data source.
  type Character {
    id: Int
    name: String
    species: String
    image: String
  }


  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    characters(page: Int): [Character]
  }
`;

const resolvers = {
  Query: {
    characters: async (parent, args, contextValue, info) => {
      // Configura la URL del servidor secundario GraphQL
      const secondaryServerUrl = "https://rickandmortyapi.com/graphql"; // Reemplaza con la URL real

      const query = `{
        characters (filter: {species: "Human"}){
            results {
              id
              name
              species
              image
            }
          }
      }`;

      // Realiza una solicitud HTTP al servidor secundario para obtener datos
      const response = await fetch(secondaryServerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const data = await response.json();
      return data.data.characters.results;
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
