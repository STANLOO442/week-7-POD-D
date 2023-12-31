"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.JWT_SECRET = process.env.JWT_SECRET || 'default-secret-key';
const sequelizeDb = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false,
});
exports.default = sequelizeDb;
