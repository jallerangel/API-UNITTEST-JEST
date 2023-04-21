"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const whiteList = [process.env.ORIGIN, process.env.ORIGIN2];
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