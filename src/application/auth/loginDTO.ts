type TLoginDTO = {
    email: string;
    password: string;
};

interface ILoginDTO extends TLoginDTO {}

class LoginDTO implements ILoginDTO {
    email: string;
    password: string;

    constructor(body: ILoginDTO) {
        this.email = body.email;
        this.password = body.password;
    }
}

export default LoginDTO;

