type TGetPublicAds = {
    currentPage: number;
    perPage: number;
};

interface IGetPublicAdsDTO extends TGetPublicAds {}

class GetPublicAdsDTO implements TGetPublicAds {
    currentPage: number;
    perPage: number;

    constructor(body: IGetPublicAdsDTO) {
        this.currentPage = Number(body.currentPage);
        this.perPage = Number(body.perPage);
    }
}

export default GetPublicAdsDTO;

