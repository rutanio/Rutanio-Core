import { Recipient } from './recipient';

export class OrderToGateway {

    constructor(uuid: string, xpubHash: string, address: string, amount: bigint, waddress: string, txId: string, swapProtocolId: string, signature: string) {
        this.uuid = uuid;
        this.xpubHash = xpubHash;
        this.address = address;
        this.amount = amount;
        this.waddress = waddress;
        this.txId = txId;
        this.swapProtocolId = swapProtocolId;
        this.signature = signature;
    }
    uuid: string;
    xpubHash: string;
    address: string;
    amount: bigint;
    waddress: string;
    txId: string;
    swapProtocolId: string;
    signature: string;
}
