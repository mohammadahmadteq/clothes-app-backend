import "reflect-metadata";

import fastify from "fastify";
import AdsRoutes from "../../http/routes/AdsRoutes";
import {API_PORT, API_URL} from "../../src/config/serverConfig";

const server = fastify();

server.register(AdsRoutes);

const Port: number = API_PORT ? Number(`${API_PORT}`) : 8080;
const Host: string = API_URL ? API_URL : "0.0.0.0";

server.listen({port: Port, host: Host}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});

