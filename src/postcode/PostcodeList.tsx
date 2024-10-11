import useFetchPostcodes from "../hooks/PostcodeHooks";
import ApiStatus from "../apiStatus";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const PostcodeList = () => {
    const nav = useNavigate();
    const { data, status, isSuccess } = useFetchPostcodes();

    if (!isSuccess) return <ApiStatus status={status} />;

    return (
        <div>
            <div className='row mb-2'>
                <h5 className='themeFontColor text-center'>
                    Postcodes currently in the database:
                </h5>
            </div>
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
                    {data &&
                        data.map((h) => (
                            <tr
                                key={h.id}
                                onClick={() => nav(`/postcode/${h.id}`)}
                            >
                                <td>{h.postcode}</td>
                                <td>{h.country}</td>
                                <td>{h.latitude}</td>
                                <td>{h.longitude}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <Button variant='btn btn-primary' onClick={() => nav(`/postcode/`)}>
                See a Random Postcode
            </Button>
            <Button
                variant='btn btn-secondary'
                onClick={() => nav(`/postcode/form`)}
            >
                Manually add a Postcode
            </Button>
        </div>
    );
};

export default PostcodeList;
