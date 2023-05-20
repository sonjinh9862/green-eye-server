"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
var Photo_1 = require("./entity/Photo");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'sonjinh9862',
    password: 'Park9862@@',
    database: 'test1',
    synchronize: false,
    logging: false,
    entities: [User_1.User, Photo_1.Photo],
    migrations: [__dirname + '/migrations/**/*.js'],
});
//# sourceMappingURL=data-source.js.map