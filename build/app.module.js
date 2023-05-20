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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("typeorm");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var users_module_1 = require("./users/users.module");
var photo_module_1 = require("./photo/photo.module");
var User_1 = require("./entity/User");
var Photo_1 = require("./entity/Photo");
var AppModule = /** @class */ (function () {
    function AppModule(dataSource) {
        this.dataSource = dataSource;
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'sonjinh9862',
                    password: 'Park9862@@',
                    database: 'test1',
                    synchronize: false,
                    logging: false,
                    entities: [User_1.User, Photo_1.Photo],
                    migrations: [],
                    subscribers: [],
                }),
                users_module_1.UsersModule,
                photo_module_1.PhotoModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService],
        }),
        __metadata("design:paramtypes", [typeorm_2.DataSource])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map