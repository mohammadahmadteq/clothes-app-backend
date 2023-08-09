import {inject, injectable} from "tsyringe";
import IAdsRepositoryPort from "../../domain/entities/ad/IAdRepositoryPort";
import AdEntity from "../../domain/entities/ad/adEntity";
import AddNewAdDTO from "./newAdDTO";
import generateEntityId from "../../sharedUtils/generateEntityId";
import GetPublicAdsDTO from "./getAdsDTO";

@injectable()
class AdsService {
    constructor(@inject("IAdsRepositoryPort") private adsRepository: IAdsRepositoryPort) {}

    async createNewAd(newAdDTO: AddNewAdDTO) {
        const adEntity = AdEntity.create({
            adId: generateEntityId(),
            ...newAdDTO
        });
        return await this.adsRepository.createNewAd(adEntity);
    }

    async getPublicAds(getPublicAdsDTO: GetPublicAdsDTO) {
        console.log(getPublicAdsDTO);
        const {currentPage, perPage} = getPublicAdsDTO;
        const adsFetchedFromDB = await this.adsRepository.getPublicAds(currentPage, perPage);

        return adsFetchedFromDB;
    }
}

export default AdsService;

