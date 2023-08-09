import {createSigner} from "fast-jwt";
import {IUser} from "../../domain/entities/user/userEntity";
import bcrypt from "bcrypt";
class AuthInfra {
    static createLoginJWT(payload: IUser) {
        const signer = createSigner({key: "secret"});
        return signer(payload);
    }

    static encryptPassword(password: string) {
        return bcrypt.hashSync(password, 10);
    }

    static verifyPassword(password: string, hashedPassword: string) {
        return bcrypt.compareSync(password, hashedPassword);
    }
}

export default AuthInfra;

