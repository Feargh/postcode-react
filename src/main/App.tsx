import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RandomPostcode from "../postcode/RandomPostcode";
import PostcodeList from "../postcode/PostcodeList";
import PostcodeSingle from "../postcode/PostcodeSingle";
import PostcodeForm from "../postcode/PostcodeForm";
import Navbar from "./Navbar";

function App() {
    return (
        <BrowserRouter basename='/postcode-react'>
            <div className='container'>
                <Navbar />
                {/* <Header subtitle='Postcodes from all over the UK' /> */}
                <Routes>
                    <Route path='/' element={<PostcodeList />}></Route>
                    <Route
                        path='/postcode/:id'
                        element={<PostcodeSingle />}
                    ></Route>
                    <Route
                        path='/postcode/'
                        element={<RandomPostcode />}
                    ></Route>
                    <Route
                        path='/postcode/form'
                        element={<PostcodeForm />}
                    ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
