import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(username: string, password: string): Promise<object> {
    const existingUser = await this.userRepository.findOne({ where: { username } });

    if (existingUser) {
      return { message: 'User already exists' };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = this.userRepository.create({ username, password: hashedPassword });
    const savedUser = await this.userRepository.save(newUser);

    return {
      id: savedUser.id,
      username: savedUser.username,
      created_at: savedUser.created_at,
      message: 'User registered successfully',
    };
  }

  async login(username: string, password: string): Promise<object> {
    const user = await this.userRepository.findOne({ where: { username } });

    if (!user) {
      return { message: 'Invalid credentials' };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { message: 'Invalid credentials' };
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return {
      id: user.id,
      username: user.username,
      token,
      created_at: user.created_at,
    };
  }
}
