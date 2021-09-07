export class FilteredWalletInfo {

  constructor(walletName: string, fromDate: string, address: string) {
    this.walletName = walletName;
    this.fromDate = fromDate;
    this.address = address;
  }

  public walletName: string;
  public fromDate: string;
  public address: string;
}
