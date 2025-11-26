import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginPage from './pages/LoginPage';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;