import {inject, injectable} from "tsyringe";
import IAdsRepositoryPort from "../../domain/entities/ad/IAdRepositoryPort";
import AdEntity from "../../domain/entities/ad/adEntity";
import AddNewAdDTO from "./newAdDTO";
import generateEntityId from "../../sharedUtils/generateEntityId";

@injectable()
export class AdsService {
    constructor(@inject("IAdsRepositoryPort") private adsRepository: IAdsRepositoryPort) {}

    async addNewAd(newAdDTO: AddNewAdDTO) {
        const adEntity = AdEntity.create({
            adId: generateEntityId(),
            ...newAdDTO
        });
        console.log(adEntity);
        return await this.adsRepository.create({
            data: adEntity
        });
    }
}

