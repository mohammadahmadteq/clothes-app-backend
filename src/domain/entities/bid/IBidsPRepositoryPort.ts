import {
  BidsUpsertArgs,
  BidsCreateArgs,
  BidsDeleteArgs,
  BidsFindFirstArgs,
  BidsAggregateArgs,
  BidsFindUniqueArgs,
  BidsFindManyArgs,
  BidsCreateManyArgs,
  BidsUpdateArgs,
} from "../../../infrastructure/database/prisma/types/bids";
import IBaseRepositoryPort from "../base/IBaseRepositoryPort";
import bidEntity from "./bidEntity";
export default interface IBidsRepositoryPort
  extends IBaseRepositoryPort<
    bidEntity,
    BidsUpsertArgs,
    BidsCreateArgs,
    BidsDeleteArgs,
    BidsFindFirstArgs,
    BidsAggregateArgs,
    BidsFindUniqueArgs,
    BidsFindManyArgs,
    BidsCreateManyArgs,
    BidsUpdateArgs
  > {}
