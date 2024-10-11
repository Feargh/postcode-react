import { Link } from "react-router-dom";
import logo from "./PostcodeLogo.png";

const NavbarBanner = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>
                    <div className='col-5'>
                        <img src={logo} alt='logo' className='logo' />
                    </div>
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        {/* <span className='col-7 mt-5 subtitle'>
                            Postcodes from all over the UK
                        </span> */}
                        <li className='nav-item'>
                            <Link className='col-7 mt-5 subtitle' to='/'>
                                Postcodes from all over the UK
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/postcode/'>
                                Random Postcode
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/postcode/form'>
                                Add Postcode
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarBanner;
