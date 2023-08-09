export default interface IBaseRepositoryPort<
    Entity,
    FindUniqueArgs,
    FindFirstArgs,
    FindManyArgs,
    CreateArgs,
    UpdateArgs,
    UpsertArgs,
    DeleteArgs,
    CreateManyArgs,
    AggregateArgs
> {
    findUnique: (Args: FindUniqueArgs) => Promise<Entity>;
    findFirst: (Args: FindFirstArgs) => Promise<Entity>;
    findMany: (Args: FindManyArgs) => Promise<Entity[]>;
    create: (Args: CreateArgs) => Promise<Entity>;
    update: (Args: UpdateArgs) => Promise<Entity>;
    upsert: (Args: UpsertArgs) => Promise<Entity>;
    delete: (Args: DeleteArgs) => Promise<Entity>;
    createMany: (Args: CreateManyArgs) => Promise<Entity>;
    aggregate: (Args: AggregateArgs) => any;
}
