import {inject, injectable} from "tsyringe";
import IUsersRepositoryPort from "../../domain/entities/user/IUserRepositoryPort";
import LoginDTO from "./loginDTO";
import UserEntity from "../../domain/entities/user/userEntity";
import {FastifyReply} from "fastify";
import IAuthInfraPort from "../../domain/entities/authInfraPort";

@injectable()
class AuthService {
    constructor(
        @inject("IUserRepositoryPort") private userRepository: IUsersRepositoryPort,
        @inject("IUserRepositoryPort") private authInfraService: IAuthInfraPort
    ) {}

    async login(loginDTO: LoginDTO, reply: FastifyReply) {
        const {email, password} = loginDTO;
        const userFromDB = await this.userRepository.getUserLogin(email);
        if (userFromDB) {
            const user = UserEntity.create(userFromDB);
            if (await this.authInfraService.verifyPassword(password, user.password)) {
                reply.status(200);
                reply.send({status: "Success", token: this.authInfraService.createLoginJWT(user)});
            } else {
                reply.status(404);
                reply.send({status: "Error", message: "Invalid Password"});
            }
        } else {
            reply.status(404);
            reply.send({status: "Error", message: "Invalid Email"});
        }
    }
}

export default AuthService;

