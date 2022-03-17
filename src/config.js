import { config as dotenv } from "dotenv";
dotenv();
//DOTENV PARA LEER VARIABLES GLOBALES .ENV
export const config = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'Qaws12pj-22',
    database: process.env.DB_DATABASE || 'congregapp',
}