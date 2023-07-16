export interface IBasePrismaRepository {
    fetchAll(): Promise<any>;
    fetchAllPaginated(query: any): Promise<any>;
}