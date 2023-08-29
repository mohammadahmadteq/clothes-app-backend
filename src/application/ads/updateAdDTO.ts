import {IAd} from "../../domain/entities/ad/adEntity";

type TUpdateAdDTO = Omit<IAd, "userId">;

interface IUpdateAdDTO extends TUpdateAdDTO {}

class UpdateAdDTO implements TUpdateAdDTO {
    adId: string;
    material: string;
    size: string;
    description: string;
    name: string;

    constructor(body: IUpdateAdDTO) {
        this.adId = body.adId;
        this.description = body.description;
        this.material = body.material;
        this.name = body.name;
        this.size = body.size;
    }
}

export default UpdateAdDTO;

