"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorEnv = void 0;
const config_1 = __importDefault(require("../config"));
const validatorEnv = (config) => {
    const valuesVarEnv = Object.entries(config);
    console.log(valuesVarEnv);
    return true;
};
exports.validatorEnv = validatorEnv;
(0, exports.validatorEnv)(config_1.default);
//# sourceMappingURL=validarorEnv.js.map