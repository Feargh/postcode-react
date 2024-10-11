import { Postcode, PostcodeResponse, PostcodeResult } from "../types/postcode";
import config from "../../config";
import { useQuery } from "@tanstack/react-query";
import axios, {
    AxiosError,
    AxiosRequestConfig,
    AxiosResponse,
    RawAxiosRequestHeaders,
} from "axios";
import { useEffect, useState } from "react";

const useFetchPostcodes = () => {
    return useQuery<Postcode[], AxiosError>({
        queryKey: ["postcodes"],
        queryFn: () =>
            // console.log({config.baseApiUrl},
            axios
                .get(`${config.baseApiUrl}/postcodes`)
                .then((resp) => resp.data),
    });
};

const useFetchPostcode = (id: number) => {
    const [postcodeData, setPostcodeData] = useState<Postcode | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get(`${config.baseApiUrl}/postcodes/${id}`)
            .then((response) => {
                // console.log(response);
                setPostcodeData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("There was an error fetching the data!");
                console.error("Error:", error);
                setLoading(false);
            });
    });

    return { postcodeData, loading, error };
};

const useFetchRandomPostcode = () => {
    const [postcodeData, setPostcodeData] = useState<PostcodeResponse | null>(
        null,
    );
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get("https://api.postcodes.io/random/postcodes")
            .then((response) => {
                // console.log(response);
                setPostcodeData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("There was an error fetching the data!");
                console.error("Error:", error);
                setLoading(false);
            });
    }, []);

    return { postcodeData, loading, error };
};

const postPostcode = () => {
    const result = (data: PostcodeResult) => {
        const client = axios.create({
            baseURL: config.baseApiUrl,
        });

        return async () => {
            const config: AxiosRequestConfig = {
                headers: {
                    Accept: "application/json",
                } as RawAxiosRequestHeaders,
            };

            try {
                const response: AxiosResponse = await client
                    .post(`postcodes`, data, config)
                    .then();
                console.log(response.status);
            } catch (err) {
                console.log("Post postcode 1");
                console.log(err);
            }
        };
    };
    return result;
};

const deletePostcode = (id: number) => {
    try {
        axios
            .delete(`${config.baseApiUrl}/postcodes/${id}`)
            .then((response) => {
                console.log(response);
            });
    } catch (error) {
        console.error("There was a problem with the delete operation:", error);
    }
};

export default useFetchPostcodes;
export {
    useFetchPostcode,
    useFetchRandomPostcode,
    postPostcode,
    deletePostcode,
};
