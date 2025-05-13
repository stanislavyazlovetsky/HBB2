import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BloodOxygen } from './blood-oxygen.entity';

@Injectable()
export class BloodOxygenService {
  constructor(
    @InjectRepository(BloodOxygen)
    private repo: Repository<BloodOxygen>,
  ) {}

  create(value: number) {
    const entry = this.repo.create({ value });
    return this.repo.save(entry);
  }

  findAll() {
    return this.repo.find();
  }
}