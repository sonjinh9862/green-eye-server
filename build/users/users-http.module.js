"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHttpModule = void 0;
var common_1 = require("@nestjs/common");
var users_module_1 = require("./users.module");
var users_service_1 = require("./users.service");
var users_controller_1 = require("./users.controller");
var UserHttpModule = /** @class */ (function () {
    function UserHttpModule() {
    }
    UserHttpModule = __decorate([
        (0, common_1.Module)({
            imports: [users_module_1.UsersModule],
            providers: [users_service_1.UsersService],
            controllers: [users_controller_1.UsersController],
        })
    ], UserHttpModule);
    return UserHttpModule;
}());
exports.UserHttpModule = UserHttpModule;
//# sourceMappingURL=users-http.module.js.map