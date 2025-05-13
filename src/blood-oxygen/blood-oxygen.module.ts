import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BloodOxygen } from './blood-oxygen.entity';
import { BloodOxygenService } from './blood-oxygen.service';
import { BloodOxygenController } from './blood-oxygen.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BloodOxygen])],
  providers: [BloodOxygenService],
  controllers: [BloodOxygenController],
})
export class BloodOxygenModule {}