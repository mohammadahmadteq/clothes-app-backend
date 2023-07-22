import {IAd} from "../../domain/entities/ad/adEntity";

type TAddNewAdDTO = Omit<IAd, "adId">;

interface IAddNewAdDTO extends TAddNewAdDTO {}

class AddNewAdDTO implements IAddNewAdDTO {
    name: string;
    material: string;
    size: string;
    userId: string;
    description: string;

    constructor(body: IAddNewAdDTO) {
        this.name = body.name;
        this.material = body.material;
        this.size = body.size;
        this.userId = body.userId;
        this.description = body.description;
    }
}

export default AddNewAdDTO;

