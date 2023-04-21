"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize();
sequelize.define('users', {
    id: sequelize_1.DataTypes.UUIDV4
});
//# sourceMappingURL=users.js.map