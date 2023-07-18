import type { Prisma } from "@prisma/client"
import type { XOR, Enumerable } from "./global";

export type UsersSelect = Prisma.UsersSelect;
export type UsersInclude = Prisma.UsersInclude;
export type UsersWhereInput = Prisma.UsersWhereInput;
export type UsersWhereUniqueInput = Prisma.UsersWhereUniqueInput;
export type UsersOrderByWithAggregationInput = Prisma.UsersOrderByWithAggregationInput;
export type UsersOrderByWithRelationInput = Prisma.UsersOrderByWithRelationInput;
export type UsersAvgOrderByAggregateInput = Prisma.UsersAvgOrderByAggregateInput
export type UsersMaxOrderByAggregateInput = Prisma.UsersMaxOrderByAggregateInput;
export type UsersMinOrderByAggregateInput = Prisma.UsersMinOrderByAggregateInput;
export type UsersSumOrderByAggregateInput = Prisma.UsersSumOrderByAggregateInput;
export type UsersCountOrderByAggregateInput = Prisma.UsersCountOrderByAggregateInput;
export type UsersCreateInput = Prisma.UsersCreateInput;
export type UsersUncheckedCreateWithoutAdsInput = Prisma.UsersUncheckedCreateWithoutAdsInput;
export type UsersUncheckedCreateWithoutBidsInput = Prisma.UsersUncheckedCreateWithoutBidsInput;
export type UsersUpdateInput = Prisma.UsersUpdateInput;
export type UsersUncheckedUpdateInput = Prisma.UsersUncheckedUpdateInput;
export type UsersCreateManyInput = Prisma.UsersCreateManyInput;
export type UsersUpdateManyMutationInput = Prisma.UsersUpdateManyMutationInput;
export type UsersUpdateManyUncheckedInput = Prisma.UsersUncheckedUpdateManyInput;

export type UsersFindUniqueArgs = {
    where: UsersWhereUniqueInput
    select?: UsersSelect | null
    include?: UsersInclude | null
}

export type UsersFindFirstArgs = {
    select?: XOR<UsersSelect, null>
    include?: XOR<UsersInclude, null>
    where?: UsersWhereInput
    orderBy?: XOR<Enumerable<UsersOrderByInput>, UsersOrderByInput>
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UsersDistinctFieldEnum>
}

export type UsersFindManyArgs = {
    select?: XOR<UsersSelect, null>
    include?: XOR<UsersInclude, null>
    where?: UsersWhereInput
    orderBy?: XOR<Enumerable<UsersOrderByInput>, UsersOrderByInput>
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UsersDistinctFieldEnum>
}

export type UsersCreateArgs = {
    select?: XOR<UsersSelect, null>
    include?: XOR<UsesrInclude, null>
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
}

export type UsersUpdateArgs = {
    select?: XOR<UsersSelect, null>
    include?: XOR<UsersInclude, null>
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    where: UsersWhereUniqueInput
}

export type UsersUpsertArgs = {
  select?: XOR<UsersSelect, null>
  include?: XOR<UsersInclude, null>
  where: UsersWhereUniqueInput
  create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
}

export type UsersDeleteArgs = {
  select?: XOR<UsersSelect, null>
  include?: XOR<UsersInclude, null>
  where: UsersWhereUniqueInput
}

export type UsersCreateManyArgs = {
  data: Enumerable<UsersCreateManyInput>
  skipDuplicates?: boolean
}

export type UsersAggregateArgs = {
  where?: UsersWhereInput
  orderBy?: XOR<Enumerable<UsersOrderByInput>, UsersOrderByInput>
  cursor?: UsersWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<UsersDistinctFieldEnum>
  _count?: true | UsersCountAggregateInputType
  _avg?: UsersAvgAggregateInputType
  _sum?: UsersSumAggregateInputType
  _min?: UsersMinAggregateInputType
  _max?: UsersMaxAggregateInputType
}