import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from 'react';

export default function LoginPage() {
    const navigate = useNavigate();
    const [voteID, setVoteID] = useState([]);
    const [name, setName] = useState([]);
    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        setVoteID(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
        console.log(voteID);
        setName(sessionStorage.getItem("Name"));
        if (sessionStorage.getItem("Admin")) {
            setAdmin(true);
        }
    });

    function CastVote(vote) {
        console.log("Vote: " + vote);
        fetch("api/cast-vote", {
            method:'POST',
            body: JSON.stringify({
            voteID : voteID,
            name: name,
            vote: vote
        }),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {
            if (data === "INVALID") {
                console.log("Error casting vote");
            }
        });
    }

    function DisplayOptions() {
        let rows = [];

        for (let i = 0; i <= 5; i++) {
            rows.push(
            <button type="button" id={"button " + i} onClick={() => CastVote(i)}>{i}</button>
            )
            
        }
        return rows;
    }

    function DisplayRevealButton() {
        if (admin) {
            return <button type="button" id={"reveal"} onClick={RevealVotes()}>Reveal Votes</button>;
        }
    }

    function RevealVotes() {
        console.log("Revealed.")
    }

    return <div className="vote-page">
        <h1>Vote: {voteID}</h1>
        <DisplayOptions/>
        <DisplayRevealButton/>
    </div>;
}