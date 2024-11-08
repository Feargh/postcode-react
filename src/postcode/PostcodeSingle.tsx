import { useParams } from "react-router-dom";
import { deletePostcode, useFetchPostcode } from "../hooks/PostcodeHooks";
import { Button } from "react-bootstrap";
import { useCallback } from "react";

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

    console.log("done");

    return (
        <div className='App'>
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
            <Button variant='primary' onClick={handleDelete}>
                Delete
            </Button>
        </div>
    );
};

export default PostcodeSingle;
