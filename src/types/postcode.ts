export type Postcode = {
    id: number;
    postcode: string;
    country: string;
    longitude: number;
    latitude: number;
};

export interface PostcodeResult {
    postcode: string;
    country: string;
    latitude: number;
    longitude: number;
}

export interface PostcodeResponse {
    status: number;
    result: PostcodeResult;
}
