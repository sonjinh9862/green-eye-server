"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoHttpModule = void 0;
var common_1 = require("@nestjs/common");
var photo_module_1 = require("./photo.module");
var photo_controller_1 = require("./photo.controller");
var photo_service_1 = require("./photo.service");
var PhotoHttpModule = /** @class */ (function () {
    function PhotoHttpModule() {
    }
    PhotoHttpModule = __decorate([
        (0, common_1.Module)({
            imports: [photo_module_1.PhotoModule],
            providers: [photo_service_1.PhotoService],
            controllers: [photo_controller_1.PhotoController],
        })
    ], PhotoHttpModule);
    return PhotoHttpModule;
}());
exports.PhotoHttpModule = PhotoHttpModule;
//# sourceMappingURL=photo-http.module.js.map