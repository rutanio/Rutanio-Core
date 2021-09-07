export class MessageInfo {

  constructor(walletName: string, password: string, accountName: string, externalAddress: string, message: string) {
    this.walletName = walletName;
    this.password = password;
    this.accountName = accountName;
    this.externalAddress = externalAddress;
    this.message = message;
  }

  public walletName: string;
  public password: string;
  public accountName: string;
  public externalAddress: string;
  public message: string;
}
