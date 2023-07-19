import AdController from "../controllers/AdsController";

const routeName: string = "ads";
async function AdsRoutes(fastify: any, options: any) {
    fastify.post(`${routeName}/add`, (req: any, res: any) => {
        return AdController.addNewAd(req);
    });
    fastify.getPublic(`${routeName}/search`, (req: any, res: any) => {
        return AdController.getAds(req);
    });
    fastify.delete(`${routeName}/delete`, (req: any, res: any) => {
        return AdController.getUserAds(req);
    });
    fastify.update(`${routeName}/edit`, (req: any, res: any) => {
        return AdController.updateAds(req);
    });
    fastify.getUserPosted(`${routeName}/userAds`, (req: any, res: any) => {
        return AdController.getUserAds(req);
    });
}

export default AdsRoutes;

