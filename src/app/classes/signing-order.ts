import { Recipient } from './recipient';

export class SigningOrder {

    constructor(address: string, txId: string, amount: string, uuid: string) {
        this.address = address;
        this.txId = txId;
        this.amount = amount;
        this.uuid = uuid;
    }
    address: string;
    txId: string;
    amount: string;
    uuid: string;
}
