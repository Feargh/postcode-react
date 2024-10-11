import { SyntheticEvent, useState } from "react";
import config from "../../config";

const PostcodeForm: React.FC = () => {
    const [formData, setFormData] = useState({
        postcode: "",
        country: "",
        latitude: "",
        longitude: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        try {
            const response = await fetch(`${config.baseApiUrl}/postcodes/`, {
                method: "Post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert("Postcode added successfully!");
            } else {
                alert("Failed to add postcode.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Form to add a postcode:</h2>

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
                    <tr>
                        <td>
                            <input
                                type='text'
                                name='postcode'
                                value={formData.postcode}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                type='text'
                                name='country'
                                value={formData.country}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                type='text'
                                name='latitude'
                                value={formData.latitude}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                type='text'
                                name='longitude'
                                value={formData.longitude}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <input type='submit' value='Submit' className='btn btn-primary' />
        </form>
    );
};

export default PostcodeForm;
