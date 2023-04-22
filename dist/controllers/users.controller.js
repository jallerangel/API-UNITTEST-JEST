"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => {
    res.json({
        msg: 'Get Users'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUser',
        id
    });
};
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password)
        res.status(400).json({ message: 'Incomplete Fields' });
    try {
        const userCreated = yield user_1.default.create({ fullname, email, password });
        res.status(201).json({
            data: userCreated,
            message: 'User created succesfully'
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: 'An error has occurred' });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'updateUser',
        id,
        body
    });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUser',
        id
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controller.js.map