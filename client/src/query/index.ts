import { gql } from 'apollo-boost';

export const BLOCK_FIELDS = gql`
  fragment blockFields on Block {
    hash
    ver
    prev_block
    mrk_root
    time
    bits
    next_block
    fee
    nonce
    n_tx
    size
    block_index
    main_chain
    height
    width
    tx {
      ver
      vin_sz
      vout_sz
      size
      weight
      fee
      relayed_by
      lock_time
      tx_index
      double_spend
      time
    }
  }
`;

const GET_BLOCKS = gql`
  ${BLOCK_FIELDS}
  query GetBlocks {
    blocks {
      ...blockFields
    }
  }
`;

const GET_BLOCK_DETAIL = gql`
  ${BLOCK_FIELDS}
  query GetBlockDetail($hash: String!) {
    block(hash: $hash) {
      ...blockFields
    }
  }
`;

export { GET_BLOCKS, GET_BLOCK_DETAIL };
