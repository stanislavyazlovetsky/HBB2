"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async register(username, password) {
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
    async login(username, password) {
        const user = await this.userRepository.findOne({ where: { username } });
        if (!user) {
            return { message: 'Invalid credentials' };
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return { message: 'Invalid credentials' };
        }
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return {
            id: user.id,
            username: user.username,
            token,
            created_at: user.created_at,
        };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map