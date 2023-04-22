"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const User = connection_1.default.define('users', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true
    },
    fullname: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    email: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    password: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
    },
});
exports.default = User;
//# sourceMappingURL=user.js.map