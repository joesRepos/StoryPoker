import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from 'react';

export default function LoginPage() {
    const navigate = useNavigate();
    const [voteID, setVoteID] = useState([]);

    useEffect(() => {
        setVoteID(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
        console.log(voteID);
    });

    return <div className="vote-page">Vote Page</div>;
}