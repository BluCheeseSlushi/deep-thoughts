const { gql } = require('apollo-server-express');
const typeDefs = gql`
    type Thought {
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
        reactionCount: Int
    }

    type Query {
        thoughts {
            _id
            username
            thoughtText
            createdAt
        }
    }
`;


module.exports = typeDefs;
