export class TransactionInfo {

    constructor(transactionType: string, transactionId: string, transactionAmount: number, transactionFee: number, transactionConfirmedInBlock: number, transactionTimestamp: number, transactionOriginAddress: Array<string>, transactionDestinyAddress: string) {
      this.transactionType = transactionType;
      this.transactionId = transactionId;
      this.transactionAmount = transactionAmount;
      this.transactionFee = transactionFee;
      this.transactionConfirmedInBlock = transactionConfirmedInBlock;
      this.transactionTimestamp = transactionTimestamp;
      this.transactionOriginAddress = transactionOriginAddress;
      this.transactionDestinyAddress = transactionDestinyAddress;
    }

    public transactionType: string;
    public transactionId: string;
    public transactionAmount: number;
    public transactionFee: number;
    public transactionConfirmedInBlock?: number;
    public transactionTimestamp: number;
    public transactionOriginAddress: Array<string>;
    public transactionDestinyAddress: string;
  }
