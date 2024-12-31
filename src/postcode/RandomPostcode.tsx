import { Button } from "react-bootstrap";
import { useFetchRandomPostcode, postPostcode } from "../hooks/PostcodeHooks";
import { useState } from "react";
import Map from "../Map";

const RandomPostcode = () => {
    const { postcodeData, loading, error } = useFetchRandomPostcode();
    const [data, setData] = useState({});
    const postPostcodeFunction = postPostcode();

    // if (postcodeData) {
    //     console.log(postcodeData.result);
    // }

    const savePostcode = () => {
        if (postcodeData) {
            setData(postPostcodeFunction(postcodeData.result));
            console.log(data);
        }
    };
    // const newPostcode = () => {};

    // Function to calculate the distance between two coordinates using the Haversine formula
    // function haversineDistance(
    //     lat1: number,
    //     lon1: number,
    //     lat2: number,
    //     lon2: number,
    // ): number {
    //     const toRadians = (degree: number) => degree * (Math.PI / 180);
    //     const R = 6371; // Radius of the Earth in kilometers

    //     const dLat = toRadians(lat2 - lat1);
    //     const dLon = toRadians(lon2 - lon1);

    //     const a =
    //         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    //         Math.cos(toRadians(lat1)) *
    //             Math.cos(toRadians(lat2)) *
    //             Math.sin(dLon / 2) *
    //             Math.sin(dLon / 2);

    //     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    //     return R * c; // Distance in kilometers
    // }

    // Function to find the closest postcodes
    // function findClosestPostcodes(
    //     searchLat: number,
    //     searchLon: number,
    //     postcodes: { lat: number; lon: number; postcode: string }[],
    // ): { lat: number; lon: number; postcode: string }[] {
    //     return postcodes
    //         .map((postcode) => ({
    //             ...postcode,
    //             distance: haversineDistance(
    //                 searchLat,
    //                 searchLon,
    //                 postcode.lat,
    //                 postcode.lon,
    //             ),
    //         }))
    //         .sort((a, b) => a.distance - b.distance);
    // }

    // Example usage
    // const postcodes = [
    //     { lat: 51.5074, lon: -0.1278, postcode: "SW1A 1AA" },
    //     {
    //         lat: 53.349352186068074,
    //         lon: -6.263124301251939,
    //         postcode: "Dublin",
    //     },
    //     { lat: 51.509865, lon: -0.118092, postcode: "WC2N 5DU" },
    //     {
    //         lat: 40.713092667051676,
    //         lon: -74.00630013045937,
    //         postcode: "New York",
    //     },
    //     { lat: 51.589759, lon: -2.996428, postcode: "NP20 1FQ" },
    //     { lat: 51.564323, lon: -0.049451, postcode: "E5 9GX" },
    //     { lat: 52.674328, lon: -1.965409, postcode: "WS11 9SJ" },
    //     { lat: 51.014614, lon: -3.089235, postcode: "TA1 3AY" },
    //     // Add more postcodes here
    // ];

    // const searchLat = 50.862164;
    // const searchLon = -1.199211;

    // const closestPostcodes = findClosestPostcodes(
    //     searchLat,
    //     searchLon,
    //     postcodes,
    // );
    // console.log(closestPostcodes);
    // console.log(
    //     haversineDistance(51.5074, -0.1278, 51.589759, -2.996428) + "km",
    // );

    return (
        <div className='App'>
            <h1 className='mt-5'>Random UK postcode</h1>
            <p className='col-7 mt-5 subtitle'>Direct from the postcode API</p>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Postcode:</th>
                        <th>Country:</th>
                        <th>Latitude:</th>
                        <th>Longitude:</th>
                    </tr>
                </thead>
                <tbody>
                    {postcodeData && (
                        <tr>
                            <td>{postcodeData.result.postcode}</td>
                            <td>{postcodeData.result.country}</td>
                            <td>{postcodeData.result.latitude}</td>
                            <td>{postcodeData.result.longitude}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Button variant='primary' onClick={savePostcode}>
                Save Postcode
            </Button>
            {/* <Button variant='primary' onClick={newPostcode}>
                New Postcode
            </Button> */}
            {postcodeData && (
                <Map
                    latitude={postcodeData.result.latitude}
                    longitude={postcodeData.result.longitude}
                />
            )}
        </div>
    );
};

export default RandomPostcode;
