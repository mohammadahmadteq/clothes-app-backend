import {fastifyJwt} from "@fastify/jwt";
import {FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import fp from "fastify-plugin";

async function authJwt(fastify: FastifyInstance) {
    fastify.register(fastifyJwt, {
        secret: "secret"
    });

    fastify.decorate("authenticate", async function (request: FastifyRequest, reply: FastifyReply): Promise<any> {
        try {
            await request.jwtVerify();
        } catch (err) {
            reply.send(err);
        }
    });
}

export default fp(authJwt, {
    name: "auth-jwt"
});

