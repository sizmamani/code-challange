export interface BlockType {
  bits: Number;
  block_index: Number;
  fee: Number;
  hash: String;
  height: Number;
  main_chain: Boolean;
  mrk_root: String;
  n_tx: Number;
  next_block: [String];
  nonce: Number;
  prev_block: String;
  size: Number;
  time: Number;
  ver: Number;
  width: Number;
}
