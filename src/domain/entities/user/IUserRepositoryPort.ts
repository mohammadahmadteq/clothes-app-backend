import { UsersUpsertArgs, UsersCreateArgs, UsersDeleteArgs, UsersFindFirstArgs, UsersAggregateArgs, UsersFindUniqueArgs, UsersFindManyArgs, UsersCreateManyArgs, UsersUpdateArgs } from "../../../infrastructure/database/prisma/types/users";
import IBaseRepositoryPort from "../base/IBaseRepositoryPort";
import userEntity from "./userEntity"
export default interface IUserRepositoryPort extends IBaseRepositoryPort<userEntity,UsersUpsertArgs, UsersCreateArgs, UsersDeleteArgs, UsersFindFirstArgs, UsersAggregateArgs, UsersFindUniqueArgs, UsersFindManyArgs, UsersCreateManyArgs, UsersUpdateArgs> {

}