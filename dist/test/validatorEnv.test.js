"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validatorEnv_1 = __importDefault(require("../utils/validatorEnv"));
describe('validatorEnv function', () => {
    it('should return an error and a specific message', () => {
        const configMock = {
            dbNameMock: '',
            dbUser: 'SAMUsak',
            port: "8000"
        };
        const messageErrMock = 'Server cannot be initialized because it needs an environment variable.';
        const expectedResult = new Error(messageErrMock);
        expect(() => { (0, validatorEnv_1.default)(configMock); }).toThrow(expectedResult);
    });
    it('should return an error and a specific message', () => {
        const configMock = {
            dbNameMock: undefined,
            dbUser: 'SAMUsak',
            port: "8000"
        };
        const messageErrMock = 'Server cannot be initialized because it needs an environment variable.';
        const expectedResult = new Error(messageErrMock);
        expect(() => { (0, validatorEnv_1.default)(configMock); }).toThrow(expectedResult);
    });
    it('should return undefined or null', () => {
        const configMock = {
            dbNameMock: 'SMAEsa',
            dbUser: 'SAMUsak',
            port: "8000"
        };
        let expectResult;
        expect((0, validatorEnv_1.default)(configMock)).toBe(expectResult);
    });
});
//# sourceMappingURL=validatorEnv.test.js.map