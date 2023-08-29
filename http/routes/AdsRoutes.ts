import AdController from "../controllers/AdsController";

const routeName: string = "ads";
async function AdsRoutes(fastify: any) {
    fastify.post(`/${routeName}/add`, (req: any, res: any) => {
        return AdController.addNewAd(req, res);
    });
    fastify.get(`/${routeName}/search`, (req: any, res: any) => {
        return AdController.getAds(req, res);
    });
    fastify.delete(`/${routeName}/delete`, (req: any, res: any) => {
        return AdController.getUserAds(req, res);
    });
    fastify.put(`/${routeName}/edit`, (req: any, res: any) => {
        return AdController.updateAds(req, res);
    });
    fastify.get(`/${routeName}/userAds`, (req: any, res: any) => {
        return AdController.getUserAds(req, res);
    });
}

export default AdsRoutes;

