import { BloodOxygenService } from './blood-oxygen.service';
export declare class BloodOxygenController {
    private service;
    constructor(service: BloodOxygenService);
    add(body: {
        value: number;
    }): Promise<import("./blood-oxygen.entity").BloodOxygen>;
    getAll(): Promise<import("./blood-oxygen.entity").BloodOxygen[]>;
}
