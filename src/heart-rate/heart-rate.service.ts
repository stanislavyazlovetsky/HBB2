
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HeartRate } from './heart-rate.entity';
import { Between } from 'typeorm';
import { subDays, startOfDay, endOfDay } from 'date-fns';



@Injectable()
export class HeartRateService {
  constructor(
    @InjectRepository(HeartRate)
    private repo: Repository<HeartRate>,
  ) {}

  create(value: number) {
    const entry = this.repo.create({ value });
    return this.repo.save(entry);
  }

  findAll() {
    return this.repo.find();
  }
  async getWeeklyAverages() {
  const today = new Date();
  const days = [];

  for (let i = 6; i >= 0; i--) {
    const dayStart = startOfDay(subDays(today, i));
    const dayEnd = endOfDay(subDays(today, i));

    const entries = await this.repo.find({
      where: {
        createdAt: Between(dayStart, dayEnd),
      },
    });

    const avg =
      entries.reduce((sum, entry) => sum + entry.value, 0) /
        entries.length || 0;

    days.push({
      date: dayStart.toISOString().slice(0, 10), // YYYY-MM-DD
      average: Math.round(avg),
    });
  }

  return days;
}
}

