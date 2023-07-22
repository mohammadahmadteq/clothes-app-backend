type TGetPublicAds = Partial<{
    currentPage: number;
    perPage: number;
}>;

interface IGetPublicAdsDTO extends TGetPublicAds {}

class GetPublicAdsDTO implements TGetPublicAds {
    currentPage?: number;
    perPage?: number;

    constructor(body: IGetPublicAdsDTO) {
        this.currentPage = body.currentPage;
        this.perPage = body.perPage;
    }
}

export default GetPublicAdsDTO;
