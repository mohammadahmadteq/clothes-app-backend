import {injectable} from "tsyringe";
import IUsersRepositoryPort from "../../domain/entities/user/IUserRepositoryPort";
import {PrismaClient} from "@prisma/client";

@injectable()
export class usersRepository implements IUsersRepositoryPort {
    model = new PrismaClient().users;

    async getUserLogin(email: string) {
        return await this.model.findUnique({
            where: {
                email: email
            },
            select: {
                password: true,
                email: true,
                userId: true,
                firstName: true,
                lastName: true
            }
        });
    }
}

