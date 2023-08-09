import {FastifyInstance} from "fastify";
import AdController from "../controllers/AdsController";

const routeName: string = "ads";
async function AdsRoutes(fastify: FastifyInstance) {
    fastify.post(`/${routeName}/add`, {onRequest: [fastify.authenticate]}, (request, reply) => {
        return AdController.addNewAd(request, reply);
    });
    fastify.get(`/${routeName}/search`, (request, reply) => {
        return AdController.getAds(request, reply);
    });
    fastify.delete(`/${routeName}/delete`, (request, reply) => {
        return AdController.getUserAds(request, reply);
    });
    fastify.put(`/${routeName}/edit`, (request, reply) => {
        return AdController.updateAds(request, reply);
    });
    fastify.get(`/${routeName}/userAds`, (request, reply) => {
        return AdController.getUserAds(request, reply);
    });
}

export default AdsRoutes;

