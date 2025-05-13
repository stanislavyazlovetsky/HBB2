"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    try {
        await app.listen(4000, '0.0.0.0');
        console.log('Server is running on http://localhost:4000');
    }
    catch (error) {
        console.error('Error starting server:', error);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map