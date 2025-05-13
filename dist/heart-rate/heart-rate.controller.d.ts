import { HeartRateService } from './heart-rate.service';
export declare class HeartRateController {
    private service;
    constructor(service: HeartRateService);
    add(body: {
        value: number;
    }): Promise<import("./heart-rate.entity").HeartRate>;
    getAll(): Promise<import("./heart-rate.entity").HeartRate[]>;
}
