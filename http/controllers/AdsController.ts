import {AdsService} from "../../src/application/ads/adsService";
import AddNewAdDTO from "../../src/application/ads/newAdDTO";
import container from "../../src/infrastructure/dependancyInjection/prismaRepositoriesContainer";

class AdController {
    static adsService = container.resolve(AdsService);

    static async addNewAd(req: any, res: any) {
        const newAdDTO = new AddNewAdDTO(req.body);
        return await this.adsService.addNewAd(newAdDTO);
    }
    static async getAds(req: any, res: any) {
        // return await this.adsService.get();
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

