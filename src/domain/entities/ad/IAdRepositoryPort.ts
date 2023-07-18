import {
  AdsUpsertArgs,
  AdsCreateArgs,
  AdsDeleteArgs,
  AdsFindFirstArgs,
  AdsAggregateArgs,
  AdsFindUniqueArgs,
  AdsFindManyArgs,
  AdsCreateManyArgs,
  AdsUpdateArgs,
} from "../../../infrastructure/database/prisma/types/ads";
import IBaseRepositoryPort from "../base/IBaseRepositoryPort";
import AdEntity from "./adEntity";
export default interface IAdsRepositoryPort
  extends IBaseRepositoryPort<
    AdEntity,
    AdsFindUniqueArgs,
    AdsFindFirstArgs,
    AdsFindManyArgs,
    AdsCreateArgs,
    AdsUpdateArgs,
    AdsUpsertArgs,
    AdsDeleteArgs,
    AdsCreateManyArgs,
    AdsAggregateArgs
  > {}
