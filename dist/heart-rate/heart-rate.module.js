"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeartRateModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const heart_rate_entity_1 = require("./heart-rate.entity");
const heart_rate_service_1 = require("./heart-rate.service");
const heart_rate_controller_1 = require("./heart-rate.controller");
let HeartRateModule = class HeartRateModule {
};
exports.HeartRateModule = HeartRateModule;
exports.HeartRateModule = HeartRateModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([heart_rate_entity_1.HeartRate])],
        providers: [heart_rate_service_1.HeartRateService],
        controllers: [heart_rate_controller_1.HeartRateController],
    })
], HeartRateModule);
//# sourceMappingURL=heart-rate.module.js.map