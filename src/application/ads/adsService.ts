import {inject, injectable} from "tsyringe";
import IAdsRepositoryPort from "../../domain/entities/ad/IAdRepositoryPort";
import AdEntity from "../../domain/entities/ad/adEntity";
import AddNewAdDTO from "./newAdDTO";
import generateEntityId from "../../sharedUtils/generateEntityId";
import GetPublicAdsDTO from "./getAdsDTO";
import UpdateAdDTO from "./updateAdDTO";

@injectable()
class AdsService {
    constructor(@inject("IAdsRepositoryPort") private adsRepository: IAdsRepositoryPort) {}

    async addNewAd(newAdDTO: AddNewAdDTO) {
        const adEntity = AdEntity.create({
            adId: generateEntityId(),
            ...newAdDTO
        });
        return await this.adsRepository.create({
            data: adEntity
        });
    }

    async getPublicAds(getPublicAdsDTO: GetPublicAdsDTO) {
        console.log(getPublicAdsDTO);
        const {currentPage, perPage} = getPublicAdsDTO;
        const adsFetchedFromDB = await this.adsRepository.findMany({
            skip: (currentPage - 1) * perPage,
            take: perPage
        });

        return adsFetchedFromDB;
    }
}

export default AdsService;

