import {createSigner} from "fast-jwt";
import {IUser} from "../../domain/entities/user/userEntity";
import bcrypt from "bcrypt";
import IAuthInfraPort from "../../domain/entities/authInfraPort";
import {injectable} from "tsyringe";

@injectable()
class AuthInfra implements IAuthInfraPort {
    createLoginJWT(payload: IUser) {
        const signer = createSigner({key: "secret"});
        return signer(payload);
    }

    async encryptPassword(password: string) {
        return await bcrypt.hash(password, 10);
    }

    async verifyPassword(password: string, hashedPassword: string) {
        return await bcrypt.compare(password, hashedPassword);
    }
}

export default AuthInfra;

