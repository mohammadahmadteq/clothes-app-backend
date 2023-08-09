import {FastifyReply} from "fastify/types/reply";
import AuthService from "../../src/application/auth/authService";
import LoginDTO from "../../src/application/auth/loginDTO";
import container from "../../src/infrastructure/dependancyInjection/prismaRepositoriesContainer";
import {FastifyRequest} from "fastify/types/request";

class AuthController {
    static authService = container.resolve(AuthService);

    static async login(req: FastifyRequest<{Body?: any}>, reply: FastifyReply) {
        const loginDTO = new LoginDTO(req.body);
        return await this.authService.login(loginDTO, reply);
    }

    // static async forgetPassword(req: any, res: any) {
    //     const forgetPasswordDTO = new ForgetPasswordDTO(req.body);
    //     return await this.authService.forgetPassword(forgetPasswordDTO);
    // }
}

export default AuthController;

