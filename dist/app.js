"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./models/server"));
const validatorEnv_1 = __importDefault(require("./utils/validatorEnv"));
const config_1 = __importDefault(require("./config"));
(0, validatorEnv_1.default)(config_1.default);
const server = new server_1.default();
server.listen();
//# sourceMappingURL=app.js.map