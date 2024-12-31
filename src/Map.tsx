import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../src/index.css";
import { Icon } from "leaflet";
// import * as parkData from "../data"; // not finished typing the address as I don't think it's in this project?

const Map = ({ latitude, longitude }) => {
    // console.log(latitude);
    // console.log(longitude);
    if (latitude && longitude) {
        return (
            <div className='map'>
                <link
                    rel='stylesheet'
                    href='https://unpkg.com/leaflet@1.6.0/dist/leaflet.css'
                    integrity='sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=='
                    crossorigin=''
                />
                <div>
                    <MapContainer
                        center={[latitude, longitude]}
                        zoom={12}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                    </MapContainer>
                </div>
            </div>
        );
    }

    return <div>:/</div>;
};

export default Map;
