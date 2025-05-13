// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { PushToken } from './push-token.entity';

// @Injectable()
// export class PushTokenService {
//   constructor(
//     @InjectRepository(PushToken)
//     private pushTokenRepository: Repository<PushToken>,
//   ) {}

//   async saveToken(token: string): Promise<PushToken> {
//     let pushToken = await this.pushTokenRepository.findOne({ where: { token } });
//     if (!pushToken) {
//       pushToken = this.pushTokenRepository.create({ token });
//       await this.pushTokenRepository.save(pushToken);
//     }
//     return pushToken;
//   }
// }
