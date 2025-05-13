import { Repository } from 'typeorm';
import { BloodOxygen } from './blood-oxygen.entity';
export declare class BloodOxygenService {
    private repo;
    constructor(repo: Repository<BloodOxygen>);
    create(value: number): Promise<BloodOxygen>;
    findAll(): Promise<BloodOxygen[]>;
}
