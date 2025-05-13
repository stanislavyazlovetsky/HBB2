import { Repository } from 'typeorm';
import { HeartRate } from './heart-rate.entity';
export declare class HeartRateService {
    private repo;
    constructor(repo: Repository<HeartRate>);
    create(value: number): Promise<HeartRate>;
    findAll(): Promise<HeartRate[]>;
}
