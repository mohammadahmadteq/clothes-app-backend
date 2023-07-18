import fastify from "fastify";
import AdController from "../controllers/AdsController";

async function AdsRoutes(fastify: any, options: any) {
     fastify.post("/add", (req: any, res: any) => {
        return AdController.addNewAd(req)
     });
}

export default AdsRoutes