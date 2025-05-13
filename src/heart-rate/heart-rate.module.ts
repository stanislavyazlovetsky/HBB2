
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeartRate } from './heart-rate.entity';
import { HeartRateService } from './heart-rate.service';
import { HeartRateController } from './heart-rate.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HeartRate])],
  providers: [HeartRateService],
  controllers: [HeartRateController],
})
export class HeartRateModule {}
