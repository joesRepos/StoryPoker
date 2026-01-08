import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from 'react';

export default function LoginPage() {
    const navigate = useNavigate();

    function EnterVote() {
        let title = document.getElementById("title").value;
        let name = document.getElementById("name").value;

        if (name === "") {
          alert("Please enter your name.");
          return;
        }
        else if (title === "") {
          alert("Please enter a vote title.");
          return;
        }
        fetch("api/validate-vote-id", {
          method:'POST',
          body: JSON.stringify({
          data : title
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
          if (data === "VALID") {
            sessionStorage.setItem("Name", name);
          navigate("/vote-page/" + title);
          }
          else if (data === "Address Unknown.") {
          console.log("No address found with title: " + title);
          }
          else if ("No vote name entered.") {
            alert("Please enter a vote name.");
          }
          else {
            console.log("An error occured.")
        }
    });
    }

    function CreateVote() {

      let title = document.getElementById("title").value;
      let name = document.getElementById("name").value;
      console.log("Entering vote: " + title);


      if (name === "") {
          alert("Please enter your name.");
          return;
        }
        else if (title === "") {
          alert("Please enter a unique title for your vote.");
          return;
        }

      fetch("api/create-new-vote", {
      method:'POST',
      body: JSON.stringify({
        data : title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .then(response => response.json())
      .then(data => {
          if (data === "VALID") {
            sessionStorage.setItem("Admin", true);
            sessionStorage.setItem("Name", name);
            navigate("/vote-page/" + title);
          }
          else if (data === "NOT UNIQUE") {
            alert("ID must be unique.");
          }
          else if (data === "Invalid, keyword used or null.") {
            alert("Your name and the ID of the vote must be entered.");
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