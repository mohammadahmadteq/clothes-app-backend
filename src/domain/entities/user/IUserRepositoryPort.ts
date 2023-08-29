import UserEntity from "./userEntity";
export default interface IUsersRepositoryPort {
    getUserLogin: (email: string) => Promise<UserEntity | null>;
}

