import {IUser} from "./user/userEntity";

export default interface IAuthInfraPort {
    createLoginJWT(payload: IUser): string;
    encryptPassword(password: string): Promise<string>;
    verifyPassword(password: string, hashedPassword: string): Promise<boolean>;
}

