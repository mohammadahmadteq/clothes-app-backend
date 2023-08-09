import {container} from "tsyringe";
import {baseRepository} from "../mysqlPrismaRepository/baseRepository";
import {adsRepository} from "../mysqlPrismaRepository/adsRepository";
import {usersRepository} from "../mysqlPrismaRepository/userRepository";

container.register("IBaseRepositoryPort", {useClass: baseRepository});
container.register("IAdsRepositoryPort", {useClass: adsRepository});
container.register("IUserRepositoryPort", {useClass: usersRepository});

export default container;

