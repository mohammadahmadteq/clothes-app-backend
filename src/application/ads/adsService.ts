import { inject, injectable } from "tsyringe";
import IAdsRepositoryPort from "../../domain/entities/ad/IAdRepositoryPort";
import AdEntity from "../../domain/entities/ad/adEntity";
import generateEntityId from "../../sharedUtils/generateEntityId";

@injectable()
export class AdsService {
    constructor( @inject("IAdsRepositoryPort") private adsRepository: IAdsRepositoryPort)
    {
    }

    async addNewAd() {
        const adEntity = AdEntity.create({
            adId: generateEntityId(),
            name: "Test Ad",
            material: "test",
            size: "xl",
            userId: "1",
            description: "djndcn"
        })
        
       return await this.adsRepository.create({
            data: adEntity
        })
    }
}