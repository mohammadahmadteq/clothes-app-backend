import {
    UsersUpsertArgs,
    UsersCreateArgs,
    UsersDeleteArgs,
    UsersFindFirstArgs,
    UsersAggregateArgs,
    UsersFindUniqueArgs,
    UsersFindManyArgs,
    UsersCreateManyArgs,
    UsersUpdateArgs
} from "../../../infrastructure/database/prisma/types/users";
import IBaseRepositoryPort from "../base/IBaseRepositoryPort";
import UserEntity from "./userEntity";
export default interface IUsersRepositoryPort
    extends IBaseRepositoryPort<
        UserEntity,
        UsersFindUniqueArgs,
        UsersFindFirstArgs,
        UsersFindManyArgs,
        UsersCreateArgs,
        UsersUpdateArgs,
        UsersUpsertArgs,
        UsersDeleteArgs,
        UsersCreateManyArgs,
        UsersAggregateArgs
    > {
    getUserLogin: (email: string) => Promise<UserEntity>;
}

