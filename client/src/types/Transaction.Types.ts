export interface TransactionType {
  ver: Number;
  vin_sz: Number;
  vout_sz: Number;
  size: Number;
  weight: Number;
  fee: Number;
  relayed_by: String;
  lock_time: Number;
  tx_index: Number;
  double_spend: Boolean;
  time: Number;
}
