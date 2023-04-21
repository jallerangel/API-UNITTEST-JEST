"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const { origin1, origin2 } = config_1.default;
const whiteList = [origin1, origin2];
const options = {
    origin: (origin, cb) => {
        if (whiteList.includes(origin) || !origin) {
            cb(null, true);
        }
        else {
            cb(new Error('Access Denied'), false);
        }
    },
};
exports.default = options;
//# sourceMappingURL=cors.js.map