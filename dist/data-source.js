"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const push_token_entity_1 = require("./push/push-token.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'ep-aged-rice-a5tw080a.us-east-2.aws.neon.tech',
    port: 5432,
    username: 'healthband_owner',
    password: 'mdGXwj3Ue2Ta',
    database: 'healthband',
    entities: [user_entity_1.User, push_token_entity_1.PushToken],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
    ssl: { rejectUnauthorized: false },
});
//# sourceMappingURL=data-source.js.map