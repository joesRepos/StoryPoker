import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from 'react';

export default function LoginPage() {
    const navigate = useNavigate();

    function CreateVote() {
        console.log(document.getElementById("title").value);
    }

    function EnterVote() {
        console.log("Entering vote: " + document.getElementById("title").value);
    }
    return <div className="login-page">
        <h2>Enter your name</h2>
        <input type="text" id = "name" placeholder="Name" required/>

        <h2>Vote Title</h2>
        <input type="text" id = "title" placeholder="Name" required/>
        <p></p>
        <button type="button" id="button" onClick={CreateVote}>New Vote</button>
        <button type="button" id="button" onClick={EnterVote}>Enter Vote</button>


    </div>; 
}