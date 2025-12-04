import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginPage from './pages/LoginPage';
import LoginPage from './pages/VotePage';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/vote-page" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;