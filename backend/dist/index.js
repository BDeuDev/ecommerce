"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const url_1 = require("./config/url");
dotenv.config();
const app = (0, express_1.default)();
//Mañana
//Terminar QA
//Inicio de sesion(Guardar tokens en session storage o local storage)
//Enviar el token eun header de respuesta haciendo un get a nuestro endpoint
//Almacenar en redux el state del user (logged o no)
//y los datos del user en base a el token
//En caso de no existir token proteger la vista del carrito para que no puedan comprar
//el buscador siempre debe estar operativo
//1/05 empezar con el buscador)
//Fecha limite para terminar este proyecto 20/05
//fecha inicio 22
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/products', productsRoutes_1.default);
app.use(`${url_1.CORE_URL_USER}`, userRoutes_1.default);
app.listen(3000, () => console.log('Server is running on port 3000'));
