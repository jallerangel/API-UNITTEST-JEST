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
const express_1 = __importDefault(require("express"));
const users_routes_1 = __importDefault(require("../routes/users.routes"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const cors_2 = __importDefault(require("../utils/cors"));
const config_1 = __importDefault(require("../config"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/users'
        };
        this.app = (0, express_1.default)();
        this.port = config_1.default.port;
        this.dbConnection();
        //Define my middlewares
        this.middlewares();
        //Define my routes
        this.routes();
    }
    routes() {
        this.app.use(this.apiPaths.users, users_routes_1.default);
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Connection to database has been succesfully');
            }
            catch (error) {
                throw new Error('Connection to database failed');
            }
        });
    }
    middlewares() {
        // LOGGER
        this.app.use((0, morgan_1.default)('dev'));
        // CORS
        this.app.use((0, cors_1.default)(cors_2.default));
        // BODYPARSER
        this.app.use(express_1.default.json());
        // PUBLIC DIR
        this.app.use(express_1.default.static('public'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening on http://localhost:${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map