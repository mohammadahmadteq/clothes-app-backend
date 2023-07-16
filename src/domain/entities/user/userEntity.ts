export interface IUser {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

 class userEntity implements IUser {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;

    constructor (userEntity: IUser){
        this.email = userEntity.email;
        this.userId = userEntity.userId;
        this.firstName = userEntity.firstName;
        this.lastName = userEntity.lastName;
        this.password = userEntity.password;
    }

    static create (user: IUser) : userEntity {
        return new userEntity(user)
    }

    static publicFields (user: IUser): Partial<IUser> {
        const entity: Partial<IUser> = new userEntity(user);
        delete entity.password;
        return entity
    }
}

export default userEntity