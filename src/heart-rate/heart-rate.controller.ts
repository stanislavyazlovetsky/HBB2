
import { Controller, Post, Get, Body } from '@nestjs/common';
import { HeartRateService } from './heart-rate.service';

@Controller('heart-rate')
export class HeartRateController {
  constructor(private service: HeartRateService) {}

  @Post('add')
  add(@Body() body: { value: number }) {
    return this.service.create(body.value);
  }

  @Get()
  getAll() {
    return this.service.findAll();
  }
@Get('weekly')
getWeeklyAverages() {
  return this.service.getWeeklyAverages();
}


}
