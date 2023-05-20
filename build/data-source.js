"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
var Photo_1 = require("./entity/Photo");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'ls-fbddd153ddafa7f555337e619d35a9eaa8961660.cngkuwxk9oj6.ap-northeast-2.rds.amazonaws.com',
    port: 5432,
    username: 'dbmasteruser',
    password: 's(Yjkjv3H6umGu75:93kZ|adY$o=|`nT@@',
    database: 'test1',
    synchronize: false,
    logging: false,
    entities: [User_1.User, Photo_1.Photo],
    migrations: [__dirname + '/migrations/**/*.js'],
});
//# sourceMappingURL=data-source.js.map