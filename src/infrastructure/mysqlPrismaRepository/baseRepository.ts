import { PrismaClient } from "@prisma/client";
import IBaseRepositoryPort from "../../domain/entities/base/IBaseRepositoryPort";
import { injectable } from "tsyringe";

@injectable()
export class baseRepository<Entity, FindUniqueArgs, FindFirstArgs, FindManyArgs, CreateArgs, 
UpdateArgs, UpsertArgs, DeleteArgs, CreateManyArgs, AggregateArgs> implements IBaseRepositoryPort<Entity, FindUniqueArgs, FindFirstArgs, FindManyArgs, CreateArgs, 
UpdateArgs, UpsertArgs, DeleteArgs, CreateManyArgs, AggregateArgs> {

   private model: any;
    constructor(modelName: "users" | "ads" | "bids") {
        this.model = new PrismaClient()[modelName]
    }
    async findUnique (Args: FindUniqueArgs) {
        return await this.model.findUnique(Args)
    };
    async findFirst(Args: FindFirstArgs) {
        return await this.model.findFirst(Args)
    };
    async findMany(Args: FindManyArgs) {
        return await this.model.findMany(Args)
    };
    async create(Args: CreateArgs) {
        return await this.model.create(Args)
    };
    async update(Args: UpdateArgs) {
        return await this.model.update(Args);
    };
    async upsert(Args: UpsertArgs) {
        return await this.model.upsert(Args);
    };
    async delete(Args: DeleteArgs) {
        return await this.model.upsert(Args);
    };
    async createMany(Args: CreateManyArgs) {
        return await this.model.createMany(Args);
    };
    async aggregate(Args: AggregateArgs) {
        await this.model.aggregate(Args)
    };

}