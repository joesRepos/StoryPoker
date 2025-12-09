import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginPage from './pages/LoginPage';
import VotePage from './pages/VotePage';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/vote-page/:id" element={<VotePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;