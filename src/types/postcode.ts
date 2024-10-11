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
    latitude: string;
    longitude: string;
}

export interface PostcodeResponse {
    status: number;
    result: PostcodeResult;
}
