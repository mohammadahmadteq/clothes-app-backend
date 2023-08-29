import {FastifyInstance} from "fastify";
import AuthController from "../controllers/authController";

const routeName: string = "auth";
async function authRoutes(fastify: FastifyInstance) {
    fastify.post(`/${routeName}/login`, (request, reply) => {
        return AuthController.login(request, reply);
    });
    fastify.post(`/${routeName}/forgot`, (request, reply) => {
        return AuthController.login(request, reply);
    });
}

export default authRoutes;

