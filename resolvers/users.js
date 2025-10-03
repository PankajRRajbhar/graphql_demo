
import {validate} from "../utils/validators.js";
import { createUser, getUser } from "../validations/users.js"
const users = []; // mock db

const userResolvers = {
  Query: {
    user: validate(getUser, (_, { id }) => users.find(u => u.id === id)),
    getUsers: (_, { limit, offset }) => users.slice(offset, offset + limit),
  },

  Mutation: {
    addUser: validate(createUser, (_, { name, age }) => {
      const newUser = {
        id: String(users.length + 1),
        name,
        age,
        createdAt: new Date().toISOString(),
      };
      users.push(newUser);
      return newUser;
    }),

  },
};

export default userResolvers;
