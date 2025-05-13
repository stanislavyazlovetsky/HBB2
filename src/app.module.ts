import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HeartRateModule } from './heart-rate/heart-rate.module';
import { BloodOxygenModule } from './blood-oxygen/blood-oxygen.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'src/.env', 
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    HeartRateModule,
    BloodOxygenModule,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
