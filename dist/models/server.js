"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = __importDefault(require("../routes/users.routes"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const cors_2 = __importDefault(require("../utils/cors"));
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/users'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8001';
        //Define my middlewares
        this.middlewares();
        //Define my routes
        this.routes();
    }
    routes() {
        this.app.use(this.apiPaths.users, users_routes_1.default);
    }
    // ToDO: Connect to DataBase
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