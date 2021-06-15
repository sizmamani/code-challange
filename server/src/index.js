const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { getBlocks, getBlockDetail } = require('./data/block');
const cors = require('cors')

const PORT = process.env.PORT || 81;

const typeDefs = `
type Query {
  blocks: [Block]
  block(hash: String!): Block
}
type Transaction {
  ver: Int,
  vin_sz: Int,
  vout_sz: Int,
  size: Int,
  weight: Int,
  fee: Float,
  relayed_by: String,
  lock_time: Int,
  tx_index: Float,
  double_spend: Boolean,
  time: Int,
}
type Block {
  hash: String
  ver: Float
  prev_block: String
  mrk_root: String
  
  time: Int
  bits: Float
  next_block: [String]
  fee: Float
  nonce: Float
  n_tx: Float
  size: Float
  block_index: Float
  main_chain: Boolean  
  height: Float
  width: Float
  tx: [Transaction]
}
`;

const resolvers = {
  Query: {
    blocks: getBlocks,
    block: (_, { hash }) => getBlockDetail(hash)
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

// Initialize the app
const app = express();

//cors
app.use(cors())

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(PORT, () => {
  console.log(`Go to http://localhost:${PORT}/graphiql to run queries!`);
});
