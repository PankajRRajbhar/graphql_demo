import express from "express";
import path  from "path";
import bodyParser from "body-parser";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import {loadFilesSync} from '@graphql-tools/load-files'
import {mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { applyUpperSchemaTransform } from './directives/upperCase.js'

import errorFormatter from "./utils/errorFormatter.js";

const resolvers = loadFilesSync(path.join(process.cwd(), 'resolvers'));
const typeDefs = loadFilesSync(path.join(process.cwd(), 'schemas'));
let schema = makeExecutableSchema({ typeDefs: mergeTypeDefs(typeDefs), resolvers: mergeResolvers(resolvers)});
schema = applyUpperSchemaTransform(schema);

// console.dir(typeDefs, {depth: 500})

const server = new ApolloServer({ schema, formatError: errorFormatter});

const app = express();
await server.start();
app.use("/graphql", cors(), bodyParser.json(), expressMiddleware(server));

app.listen(4000, () => {
  console.log("🚀 Server ready at http://localhost:4000/graphql");
});
