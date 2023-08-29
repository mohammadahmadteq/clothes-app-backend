import {injectable} from "tsyringe";
import IAdsRepositoryPort from "../../domain/entities/ad/IAdRepositoryPort";
import adEntity from "../../domain/entities/ad/adEntity";
import {PrismaClient} from "@prisma/client";

@injectable()
export class adsRepository implements IAdsRepositoryPort {
    model = new PrismaClient().ads;
    async createNewAd(adEntity: adEntity) {
        return await this.model.create({
            data: adEntity,
            select: {
                adId: true,
                description: true,
                name: true,
                material: true,
                size: true,
                userId: true
            }
        });
    }
    getPublicAds(perPage: number, currentPage: number) {
        return this.model.findMany({
            skip: (currentPage - 1) * perPage,
            take: perPage,
            select: {
                adId: true,
                description: true,
                name: true,
                material: true,
                size: true,
                userId: true
            }
        });
    }
}

