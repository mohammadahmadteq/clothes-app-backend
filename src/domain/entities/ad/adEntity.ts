export interface IAd{
    adId: string;
    name: string;
    material: string;
    size: string;
    userId: string;
    description: string;
}


class AdEntity implements IAd {
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

    static create (ad: IAd) : AdEntity {
        return new AdEntity(ad)
    }
}

export default AdEntity