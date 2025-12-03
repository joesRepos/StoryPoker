import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from 'react';

export default function LoginPage() {
    const navigate = useNavigate();

    function EnterVote() {
        console.log(document.getElementById("title").value);
    }

    function CreateVote() {
        console.log("Entering vote: " + document.getElementById("title").value);

        fetch("api/create-new-vote", {
      method:'POST',
      body: JSON.stringify({
        data : document.getElementById("title").value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
        if (data === "VALID") {
          console.log("SAVED");
        }
        else if (data === "NOT UNIQUE") {
          console.log("Non unique ID, did not save.");
        }
        else {
          console.log("An error occured.")
        }
    });

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