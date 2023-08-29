import {IAd} from "../../domain/entities/ad/adEntity";

type TDeleteAdDTO = Pick<IAd, "adId">;

interface IDeleteAdDTO extends TDeleteAdDTO {}

class DeleteAdDTO implements IDeleteAdDTO {
    adId: string;

    constructor(body: IDeleteAdDTO) {
        this.adId = body.adId;
    }
}

export default DeleteAdDTO;

