import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class EncryptionService {

    static singletonInstance: EncryptionService;

    public publicKey: string;

    constructor() {

        if (!EncryptionService.singletonInstance) {
            EncryptionService.singletonInstance = this;
        }

        return EncryptionService.singletonInstance;

    }

    public async encrypt(value: string, publicKey: string) {
        const ECIES = require('electrum-ecies');

        return ECIES.encrypt(value, publicKey);
    }


}
