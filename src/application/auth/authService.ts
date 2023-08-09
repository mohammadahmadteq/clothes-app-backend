import {inject, injectable} from "tsyringe";
import IUsersRepositoryPort from "../../domain/entities/user/IUserRepositoryPort";
import LoginDTO from "./loginDTO";
import AuthInfra from "../../infrastructure/auth/authInfra";
import UserEntity from "../../domain/entities/user/userEntity";
import {FastifyReply} from "fastify";

@injectable()
class AuthService {
    constructor(@inject("IUserRepositoryPort") private userRepository: IUsersRepositoryPort) {}

    async login(loginDTO: LoginDTO, reply: FastifyReply) {
        const {email, password} = loginDTO;
        const userFromDB = await this.userRepository.getUserLogin(email);
        const user = UserEntity.create(userFromDB);
        if (AuthInfra.verifyPassword(password, user.password)) {
            reply.status(200);
            reply.send({status: "Success", token: AuthInfra.createLoginJWT(user)});
        } else {
            reply.status(404);
            reply.send({status: "Error", message: "Not Found"});
        }
    }
}

export default AuthService;

