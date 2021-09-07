import { Injectable } from '@angular/core';
import { Logger } from './logger.service';

export interface Chain {
    name: string;
    identity: string;
    tooltip: string;
    port?: number;
    rpcPort?: number;
    apiPort?: number;
    wsPort?: number;
    network: string;
    mode?: string;
    genesisDate?: Date;
    path?: string;
    datafolder?: string;
}

@Injectable({
    providedIn: 'root'
})
export class ChainService {

    static singletonInstance: ChainService;

    private availableChains: Array<Chain>;

    constructor(private log: Logger) {

        if (!ChainService.singletonInstance) {

            this.availableChains = [
                { name: 'Rutanio', identity: 'ruta', tooltip: 'Rutanio Core', port: 6782, rpcPort: 6781, apiPort: 39220, wsPort: 39220, network: 'rutaniomain', genesisDate: new Date(2019, 7, 28) },
                { name: 'Rutanio Core (RegTest)', identity: 'city', tooltip: 'Rutanio Core', port: 14333, rpcPort: 14334, apiPort: 14335, wsPort: 14336, network: 'cityregtest', genesisDate: new Date(2018, 9, 1) },
                { name: 'Rutanio Core (Test)', identity: 'city', tooltip: 'Rutanio Core', port: 24333, rpcPort: 24334, apiPort: 24335, wsPort: 24336, network: 'citytest', genesisDate: new Date(2018, 9, 1) },

                { name: 'Stratis', identity: 'stratis', tooltip: 'Stratis Core', port: 16178, rpcPort: 16174, apiPort: 37221, wsPort: 4336, network: 'stratismain', genesisDate: new Date(2016, 8, 6) },
                { name: 'Stratis (RegTest)', identity: 'stratis', tooltip: 'Stratis Core', port: 18444, rpcPort: 18442, apiPort: 37221, wsPort: 4336, network: 'stratisregtest', genesisDate: new Date(2017, 5, 16) },
                { name: 'Stratis (Test)', identity: 'stratis', tooltip: 'Stratis Core', port: 26178, rpcPort: 26174, apiPort: 38221, wsPort: 4336, network: 'stratistest', genesisDate: new Date(2017, 5, 4) },

                { name: 'Bitcoin', identity: 'bitcoin', tooltip: 'Rutanio Core: Bitcoin', port: 8333, rpcPort: 8332, apiPort: 37220, wsPort: 4336, network: 'bitcoinmain', genesisDate: new Date(2009, 1, 3) },
                { name: 'Bitcoin (Test)', identity: 'bitcoin', tooltip: 'Rutanio Core: Bitcoin', port: 18333, rpcPort: 18332, apiPort: 38220, wsPort: 4336, network: 'bitcointest', genesisDate: new Date(2009, 1, 3) },
            ];

            ChainService.singletonInstance = this;
        }

        return ChainService.singletonInstance;
    }

    /** Retrieves a configuration for a blockchain, including the right network name and ports. */
    getChain(name: string = 'ruta', network: string = 'rutaniomain'): Chain {
        // Couldn't use .find with the current tsconfig setup.
        // const selectedChains = this.availableChains.filter(c => c.identity === name && c.network === network);
        const selectedChains = this.availableChains.filter(c => c.network === network);
        let selectedChain: Chain;

        if (selectedChains.length === 0) {
            this.log.error('The supplied coin parameter is invalid. First available chain selected as default. Argument value: ' + name);
            selectedChain = this.availableChains[0];
        } else {
            selectedChain = selectedChains[0];
        }

        return selectedChain;
    }
}
