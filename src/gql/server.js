import * as dotenv from 'dotenv';
import gql from 'graphql-tag';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import Todo from '../db/models/Todo.js';
import { connectDb } from '../db/mongoClient.js';

dotenv.config();
await connectDb();

const typeDefs = gql`
  enum Status {
    IDLE
    PENDING
    COMPLETE
  }

  type User {
    userId: ID
    fname: String
    lname: String
    password: String
    email: String
    name: String
  }
  type Todo {
    id: ID
    name: String
    description: String
    status: Status
    userId: ID
  }
  type Query {
    users: [User!]!
    todos(userId: String): [Todo!]!
  }
`;

const users = [
  {
    userId: '32dsd',
    fname: 'andy',
    lname: 'little',
    password: '34n32dd',
    email: 'andy.little@hotmasil.co.uk',
  },
];

const resolvers = {
  Query: {
    users() {
      return users;
    },
    async todos(_, input) {
      const { userId } = input;
      const todos = await Todo.find({ userId });
      return todos;
    },
  },
  User: {
    name(user) {
      return `${user.fname} ${user.lname}`;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
