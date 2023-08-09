import AdEntity from "./adEntity";
export default interface IAdsRepositoryPort {
    createNewAd: (adEntity: AdEntity) => Promise<AdEntity>;
    getPublicAds: (perPage: number, currentPage: number) => Promise<AdEntity[]>;
}

