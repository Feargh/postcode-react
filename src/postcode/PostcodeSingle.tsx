import { useParams } from "react-router-dom";
import { deletePostcode, useFetchPostcode } from "../hooks/PostcodeHooks";
import { Button } from "react-bootstrap";
import { useCallback } from "react";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../index.css";
// import { Icon } from "leaflet";
import Map from "../Map";
// import * as parkData from "../data"; // not finished typing the address as I don't think it's in this project?

const PostcodeSingle = () => {
    const { id } = useParams();
    if (!id) throw Error("Postcode id not found");
    const postcodeId = parseInt(id);

    const { postcodeData, loading, error } = useFetchPostcode(postcodeId);

    const handleDelete = useCallback(() => {
        if (postcodeId) {
            console.log(postcodeId);
            deletePostcode(postcodeId);
        }
    }, [postcodeId]);

    // console.log("done");

    return (
        <div className='App'>
            <link
                rel='stylesheet'
                href='https://unpkg.com/leaflet@1.6.0/dist/leaflet.css'
                integrity='sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=='
                crossorigin=''
            />
            <h1 className='mt-5'>Specific UK postcode</h1>
            <p className='col-7 mt-5 subtitle'>From our backend database</p>
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
                            <td>{postcodeData.postcode}</td>
                            <td>{postcodeData.country}</td>
                            <td>{postcodeData.latitude}</td>
                            <td>{postcodeData.longitude}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {postcodeData && (
                // <div>
                //     <MapContainer
                //         center={[postcodeData.latitude, postcodeData.longitude]}
                //         zoom={12}
                //         scrollWheelZoom={false}
                //     >
                //         <TileLayer
                //             url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                //             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                //         />
                //     </MapContainer>
                // </div>
                <Map
                    latitude={postcodeData.latitude}
                    longitude={postcodeData.longitude}
                />
            )}
            <Button variant='primary' onClick={handleDelete}>
                Delete
            </Button>
        </div>
    );
};

export default PostcodeSingle;
