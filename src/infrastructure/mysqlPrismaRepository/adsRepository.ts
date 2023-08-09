import {injectable} from "tsyringe";
import IAdsRepositoryPort from "../../domain/entities/ad/IAdRepositoryPort";
import adEntity from "../../domain/entities/ad/adEntity";
import {
    AdsUpsertArgs,
    AdsCreateArgs,
    AdsDeleteArgs,
    AdsFindFirstArgs,
    AdsAggregateArgs,
    AdsFindUniqueArgs,
    AdsFindManyArgs,
    AdsCreateManyArgs,
    AdsUpdateArgs
} from "../../infrastructure/database/prisma/types/ads";
import {baseRepository} from "./baseRepository";

@injectable()
export class adsRepository
    extends baseRepository<
        adEntity,
        AdsFindUniqueArgs,
        AdsFindFirstArgs,
        AdsFindManyArgs,
        AdsCreateArgs,
        AdsUpdateArgs,
        AdsUpsertArgs,
        AdsDeleteArgs,
        AdsCreateManyArgs,
        AdsAggregateArgs
    >
    implements IAdsRepositoryPort
{
    constructor() {
        super("ads");
    }
}

