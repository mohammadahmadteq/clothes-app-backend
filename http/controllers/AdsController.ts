
import { AdsService } from "../../src/application/ads/adsService";
import container from "../../src/infrastructure/dependancyInjection/prismaRepositoriesContainer";

class AdController {
  static adsService = container.resolve(AdsService);

  static async addNewAd(req: any) {
    return await this.adsService.addNewAd();
  }
}


export default AdController