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
import BidEntity from "./bidEntity";
export default interface IBidsRepositoryPort
  extends IBaseRepositoryPort<
    BidEntity,
    BidsFindUniqueArgs,
    BidsFindFirstArgs,
    BidsFindManyArgs,
    BidsCreateArgs,
    BidsUpdateArgs,
    BidsUpsertArgs,
    BidsDeleteArgs,
    BidsCreateManyArgs,
    BidsAggregateArgs
  > {}
