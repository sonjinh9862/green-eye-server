"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var photo_service_1 = require("./photo.service");
var photo_controller_1 = require("./photo.controller");
var Photo_1 = require("../entity/Photo");
var PhotoModule = /** @class */ (function () {
    function PhotoModule() {
    }
    PhotoModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([Photo_1.Photo])],
            providers: [photo_service_1.PhotoService],
            controllers: [photo_controller_1.PhotoController],
            exports: [typeorm_1.TypeOrmModule],
        })
    ], PhotoModule);
    return PhotoModule;
}());
exports.PhotoModule = PhotoModule;
//# sourceMappingURL=photo.module.js.map