import { GraphQLID, GraphQLList } from 'graphql';
import { Users } from '../../Entities/User';
import { UserType } from '../TypeDefs/Users';

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find();
    }
}


export const GET_USER = {
    type: UserType,
    args: {
        id: { type: GraphQLID }
    },
    resolve(parent: any, args: any) {
        const id = args.id;
        return Users.findOne({ where: { id } }).then((user) => {
            return user || null;
        }).catch((error) => {
            throw new Error(`Error fetching user: ${error.message}`)
        })
    },
}