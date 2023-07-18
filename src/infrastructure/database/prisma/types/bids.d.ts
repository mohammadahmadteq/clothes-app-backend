import type { Prisma } from "@prisma/client"
import type { XOR, Enumerable } from "./global";

export type BidsSelect = Prisma.BidsSelect;
export type BidsInclude = Prisma.BidsInclude;
export type BidsWhereInput = Prisma.BidsWhereInput;
export type BidsWhereUniqueInput = Prisma.BidsWhereUniqueInput;
export type BidsOrderByWithAggregationInput = Prisma.BidsOrderByWithAggregationInput;
export type BidsOrderByWithRelationInput = Prisma.BidsOrderByWithRelationInput;
export type BidsAvgOrderByAggregateInput = Prisma.BidsAvgOrderByAggregateInput
export type BidsMaxOrderByAggregateInput = Prisma.BidsMaxOrderByAggregateInput;
export type BidsMinOrderByAggregateInput = Prisma.BidsMinOrderByAggregateInput;
export type BidsSumOrderByAggregateInput = Prisma.BidsSumOrderByAggregateInput;
export type BidsCountOrderByAggregateInput = Prisma.BidsCountOrderByAggregateInput;
export type BidsCreateInput = Prisma.BidsCreateInput;
export type BidsUncheckedCreateWithoutAdsInput = Prisma.BidsUncheckedCreateWithoutAdsInput;
export type BidsUncheckedCreateWithoutUsersInput = Prisma.BidsUncheckedCreateWithoutUsersInput;
export type BidsUpdateInput = Prisma.BidsUpdateInput;
export type BidsUncheckedUpdateInput = Prisma.BidsUncheckedUpdateInput;
export type BidsCreateManyInput = Prisma.BidsCreateManyInput;
export type BidsUpdateManyMutationInput = Prisma.BidsUpdateManyMutationInput;
export type BidsUpdateManyUncheckedInput = Prisma.BidsUncheckedUpdateManyInput;

export type BidsFindUniqueArgs = {
    where: BidsWhereUniqueInput
    select?: BidsSelect | null
    include?: BidsInclude | null
}

export type BidsFindFirstArgs = {
    select?: XOR<BidsSelect, null>
    include?: XOR<BidsInclude, null>
    where?: BidsWhereInput
    orderBy?: XOR<Enumerable<BidsOrderByInput>, BidsOrderByInput>
    cursor?: BidsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BidsDistinctFieldEnum>
}

export type BidsFindManyArgs = {
    select?: XOR<BidsSelect, null>
    include?: XOR<BidsInclude, null>
    where?: BidsWhereInput
    orderBy?: XOR<Enumerable<BidsOrderByInput>, BidsOrderByInput>
    cursor?: BidsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BidsDistinctFieldEnum>
}

export type BidsCreateArgs = {
    select?: XOR<BidsSelect, null>
    include?: XOR<UsesrInclude, null>
    data: XOR<BidsCreateInput, BidsUncheckedCreateInput>
}

export type BidsUpdateArgs = {
    select?: XOR<BidsSelect, null>
    include?: XOR<BidsInclude, null>
    data: XOR<BidsUpdateInput, BidsUncheckedUpdateInput>
    where: BidsWhereUniqueInput
}

export type BidsUpsertArgs = {
  select?: XOR<BidsSelect, null>
  include?: XOR<BidsInclude, null>
  where: BidsWhereUniqueInput
  create: XOR<BidsCreateInput, BidsUncheckedCreateInput>
  update: XOR<BidsUpdateInput, BidsUncheckedUpdateInput>
}

export type BidsDeleteArgs = {
  select?: XOR<BidsSelect, null>
  include?: XOR<BidsInclude, null>
  where: BidsWhereUniqueInput
}

export type BidsCreateManyArgs = {
  data: Enumerable<BidsCreateManyInput>
  skipDuplicates?: boolean
}

export type BidsAggregateArgs = {
  where?: BidsWhereInput
  orderBy?: XOR<Enumerable<BidsOrderByInput>, BidsOrderByInput>
  cursor?: BidsWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<BidsDistinctFieldEnum>
  _count?: true | BidsCountAggregateInputType
  _avg?: BidsAvgAggregateInputType
  _sum?: BidsSumAggregateInputType
  _min?: BidsMinAggregateInputType
  _max?: BidsMaxAggregateInputType
}