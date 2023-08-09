import AdsService from "../../src/application/ads/adsService";
import GetPublicAdsDTO from "../../src/application/ads/getAdsDTO";
import AddNewAdDTO from "../../src/application/ads/newAdDTO";
import container from "../../src/infrastructure/dependancyInjection/container";

class AdController {
    static adsService = container.resolve(AdsService);

    static async addNewAd(req: any, res: any) {
        const newAdDTO = new AddNewAdDTO(req.body);
        return await this.adsService.createNewAd(newAdDTO);
    }
    static async getAds(req: any, res: any) {
        const getPublicAdsDTO = new GetPublicAdsDTO(req.query);
        return await this.adsService.getPublicAds(getPublicAdsDTO);
    }
    static async getUserAds(req: any, res: any) {
        // return await this.adsService.addNewAd();
    }
    static async deleteAds(req: any, res: any) {
        // return await this.adsService.addNewAd();
    }
    static async updateAds(req: any, res: any) {
        // return await this.adsService.addNewAd();
    }
}

export default AdController;

