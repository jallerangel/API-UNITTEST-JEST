"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validatorEnv = (config) => {
    const valuesVarEnv = Object.values(config);
    const isUndefinedOrEmpty = valuesVarEnv.some(keyVal => keyVal === '' || keyVal === undefined);
    if (isUndefinedOrEmpty)
        throw new Error('Server cannot be initialized because it needs an environment variable.');
};
exports.default = validatorEnv;
//# sourceMappingURL=validatorEnv.js.map