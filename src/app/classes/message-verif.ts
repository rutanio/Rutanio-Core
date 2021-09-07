export class MessageVerif {

  constructor(signature: string, externalAddress: string, message: string) {
    this.signature = signature;
    this.externalAddress = externalAddress;
    this.message = message;
  }

  public signature: string;
  public externalAddress: string;
  public message: string;
}
