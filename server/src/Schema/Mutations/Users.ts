import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/Users";
import { Users } from '../../Entities/User';

//Se define metodo para crear usuario en graphql
export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        role: { type: GraphQLInt }
    },

    async resolve(parent: any, args: any) {
        const { name, username, email, password, role } = args;

        await Users.insert({ name, username, email, password, role })
        return args;

    }
}

//Se define metodo para crear usuario en graphql
export const UPDATE_USER = {
    type: UserType,
    args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
    },

    async resolve(parent: any, args: any) {
        const { id, name, username } = args;

        const user = await Users.findOneBy({ id: id })

        if (!user) {
            throw new Error("Username doesn't exist")
        } else {
            await Users.update({ name: name }, { username: username })
            return args;
        }
    }
}


//Se define metodo para borrar usuario en graphql
export const DELETE_USER = {
    type: UserType,
    args: {
        id: { type: GraphQLInt }
    },
    async resolve(parent: any, args: any) {
        const id = args.id;
        await Users.delete(id)
    }
}
