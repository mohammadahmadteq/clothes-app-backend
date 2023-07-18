import type { Prisma } from "@prisma/client"
import type { XOR, Enumerable } from "./global";

export type AdsSelect = Prisma.AdsSelect;
export type AdsInclude = Prisma.AdsInclude;
export type AdsWhereInput = Prisma.AdsWhereInput;
export type AdsWhereUniqueInput = Prisma.AdsWhereUniqueInput;
export type AdsOrderByWithAggregationInput = Prisma.AdsOrderByWithAggregationInput;
export type AdsOrderByWithRelationInput = Prisma.AdsOrderByWithRelationInput;
export type AdsAvgOrderByAggregateInput = Prisma.AdsAvgOrderByAggregateInput
export type AdsMaxOrderByAggregateInput = Prisma.AdsMaxOrderByAggregateInput;
export type AdsMinOrderByAggregateInput = Prisma.AdsMinOrderByAggregateInput;
export type AdsSumOrderByAggregateInput = Prisma.AdsSumOrderByAggregateInput;
export type AdsCountOrderByAggregateInput = Prisma.AdsCountOrderByAggregateInput;
export type AdsCreateInput = Prisma.AdsCreateInput;
export type AdsUncheckedCreateWithoutUsersInput = Prisma.AdsUncheckedCreateWithoutUsersInput;
export type AdsUncheckedCreateWithoutBidsInput = Prisma.AdsUncheckedCreateWithoutBidsInput;
export type AdsUpdateInput = Prisma.AdsUpdateInput;
export type AdsUncheckedUpdateInput = Prisma.AdsUncheckedUpdateInput;
export type AdsCreateManyInput = Prisma.AdsCreateManyInput;
export type AdsUpdateManyMutationInput = Prisma.AdsUpdateManyMutationInput;
export type AdsUpdateManyUncheckedInput = Prisma.AdsUncheckedUpdateManyInput;

export type AdsFindUniqueArgs = {
    where: AdsWhereUniqueInput
    select?: AdsSelect | null
    include?: AdsInclude | null
}

export type AdsFindFirstArgs = {
    select?: XOR<AdsSelect, null>
    include?: XOR<AdsInclude, null>
    where?: AdsWhereInput
    orderBy?: XOR<Enumerable<AdsOrderByInput>, AdsOrderByInput>
    cursor?: AdsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AdsDistinctFieldEnum>
}

export type AdsFindManyArgs = {
    select?: XOR<AdsSelect, null>
    include?: XOR<AdsInclude, null>
    where?: AdsWhereInput
    orderBy?: XOR<Enumerable<AdsOrderByInput>, AdsOrderByInput>
    cursor?: AdsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AdsDistinctFieldEnum>
}

export type AdsCreateArgs = {
    select?: XOR<AdsSelect, null>
    include?: XOR<UsesrInclude, null>
    data: XOR<AdsCreateInput, AdsUncheckedCreateInput>
}

export type AdsUpdateArgs = {
    select?: XOR<AdsSelect, null>
    include?: XOR<AdsInclude, null>
    data: XOR<AdsUpdateInput, AdsUncheckedUpdateInput>
    where: AdsWhereUniqueInput
}

export type AdsUpsertArgs = {
  select?: XOR<AdsSelect, null>
  include?: XOR<AdsInclude, null>
  where: AdsWhereUniqueInput
  create: XOR<AdsCreateInput, AdsUncheckedCreateInput>
  update: XOR<AdsUpdateInput, AdsUncheckedUpdateInput>
}

export type AdsDeleteArgs = {
  select?: XOR<AdsSelect, null>
  include?: XOR<AdsInclude, null>
  where: AdsWhereUniqueInput
}

export type AdsCreateManyArgs = {
  data: Enumerable<AdsCreateManyInput>
  skipDuplicates?: boolean
}

export type AdsAggregateArgs = {
  where?: AdsWhereInput
  orderBy?: XOR<Enumerable<AdsOrderByInput>, AdsOrderByInput>
  cursor?: AdsWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<AdsDistinctFieldEnum>
  _count?: true | AdsCountAggregateInputType
  _avg?: AdsAvgAggregateInputType
  _sum?: AdsSumAggregateInputType
  _min?: AdsMinAggregateInputType
  _max?: AdsMaxAggregateInputType
}