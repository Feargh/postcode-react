import { Button } from "react-bootstrap";
import { useFetchRandomPostcode, postPostcode } from "../hooks/PostcodeHooks";
import { useState } from "react";

const RandomPostcode = () => {
    const { postcodeData, loading, error } = useFetchRandomPostcode();
    const [data, setData] = useState({});
    const postPostcodeFunction = postPostcode();

    if (postcodeData) {
        console.log(postcodeData.result);
    }

    const savePostcode = () => {
        if (postcodeData) {
            setData(postPostcodeFunction(postcodeData.result));
            console.log(data);
        }
    };
    // const newPostcode = () => {};

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
        </div>
    );
};

export default RandomPostcode;
