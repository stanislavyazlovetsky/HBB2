"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloodOxygenModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const blood_oxygen_entity_1 = require("./blood-oxygen.entity");
const blood_oxygen_service_1 = require("./blood-oxygen.service");
const blood_oxygen_controller_1 = require("./blood-oxygen.controller");
let BloodOxygenModule = class BloodOxygenModule {
};
exports.BloodOxygenModule = BloodOxygenModule;
exports.BloodOxygenModule = BloodOxygenModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([blood_oxygen_entity_1.BloodOxygen])],
        providers: [blood_oxygen_service_1.BloodOxygenService],
        controllers: [blood_oxygen_controller_1.BloodOxygenController],
    })
], BloodOxygenModule);
//# sourceMappingURL=blood-oxygen.module.js.map