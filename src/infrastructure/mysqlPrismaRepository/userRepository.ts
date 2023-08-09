import {injectable} from "tsyringe";
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
} from "../../infrastructure/database/prisma/types/users";
import {baseRepository} from "./baseRepository";
import userEntity from "../../domain/entities/user/userEntity";
import IUsersRepositoryPort from "../../domain/entities/user/IUserRepositoryPort";

@injectable()
export class usersRepository
    extends baseRepository<
        userEntity,
        UsersFindUniqueArgs,
        UsersFindFirstArgs,
        UsersFindManyArgs,
        UsersCreateArgs,
        UsersUpdateArgs,
        UsersUpsertArgs,
        UsersDeleteArgs,
        UsersCreateManyArgs,
        UsersAggregateArgs
    >
    implements IUsersRepositoryPort
{
    constructor() {
        super("users");
    }

    async getUserLogin(email: string) {
        return await this.model.findUnique({
            where: {
                email: email
            }
        });
    }
}

