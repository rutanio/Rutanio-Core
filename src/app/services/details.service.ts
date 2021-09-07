import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DetailsService {

    static singletonInstance: DetailsService;

    public item: any;
    public rutaTransaction = false;

    constructor() {

        if (!DetailsService.singletonInstance) {
            DetailsService.singletonInstance = this;
        }

        return DetailsService.singletonInstance;

    }

    show(item: any) {
        this.item = item;
        this.rutaTransaction = true;
    }

    hide() {
        this.item = null;
        this.rutaTransaction = false;
    }

    get opened(): boolean {
        return this.item != null;
    }
}
