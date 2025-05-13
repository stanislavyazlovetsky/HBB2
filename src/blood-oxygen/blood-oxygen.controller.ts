import { Controller, Post, Get, Body } from '@nestjs/common';
import { BloodOxygenService } from './blood-oxygen.service';

@Controller('blood-oxygen')
export class BloodOxygenController {
  constructor(private service: BloodOxygenService) {}

  @Post('add')
  add(@Body() body: { value: number }) {
    return this.service.create(body.value);
  }

  @Get()
  getAll() {
    return this.service.findAll();
  }
}