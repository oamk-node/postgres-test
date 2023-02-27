"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// https://www.section.io/engineering-education/how-to-use-typescript-with-nodejs/
// https://www.npmjs.com/package/@types/pg
// https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/
// https://big-data-skills.com/host-postgresql-tables-for-free-with-render/
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const port = 3001;
app.get("/", (req, res) => {
    /*   const pool: Pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'todo',
        password: 'root',
        port: 5435
      }) */
    const pool = new pg_1.Pool({
        user: 'root',
        host: 'dpg-cfu59l2rrk0c830k5l7g-a.oregon-postgres.render.com',
        database: 'todo',
        password: 'Fbs5hvojJZ6A713cmOzvHaklWZjUUElp',
        port: 5432
    });
    pool.query('select * from task', (error, result) => {
        if (error) {
            res.status(600).json({ error: error.message });
        }
        res.status(200).json(result.rows);
    });
});
app.listen(port, () => {
    console.log("Started...");
});
