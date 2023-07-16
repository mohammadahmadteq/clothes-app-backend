export interface IAd{
    adId: string;
    name: string;
    material: string;
    size: string;
    userId: string;
    description: string;
}


class adEntity implements IAd {
     adId: string;
    name: string;
    material: string;
    size: string;
    userId: string;
    description: string;

    constructor(adEntity: IAd) {
        this.adId = adEntity.adId;
        this.name = adEntity.name;
        this.material = adEntity.material
        this.size = adEntity.size;
        this.userId = adEntity.userId;
        this.description = adEntity.description;
    }
}