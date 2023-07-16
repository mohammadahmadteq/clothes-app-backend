export interface IBid {
    bidId: string;
    price: number;
    adId: string;
    userId: string;
}

class bidEntity implements IBid {
    bidId: string;
    price: number;
    adId: string;
    userId: string;

    constructor(bidEntity: IBid)
    {
        this.bidId = bidEntity.bidId;
        this.price = bidEntity.price;
        this.adId = bidEntity.adId;
        this.userId = bidEntity.userId;
    }
}

export default bidEntity;