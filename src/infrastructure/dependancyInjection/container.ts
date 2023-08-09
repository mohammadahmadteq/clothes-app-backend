import {container} from "tsyringe";
import {adsRepository} from "../mysqlPrismaRepository/adsRepository";
import {usersRepository} from "../mysqlPrismaRepository/userRepository";
import AuthInfra from "../auth/authInfra";

container.register("IAdsRepositoryPort", {useClass: adsRepository});
container.register("IUserRepositoryPort", {useClass: usersRepository});
container.register("IAuthInfraPort", {useClass: AuthInfra});
export default container;

