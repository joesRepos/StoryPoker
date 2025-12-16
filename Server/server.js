const express = require('express');
const app = express();

let votes = [];
app.use(express.json());

app.post("/api/create-new-vote", async (req, res) => {

    try {
        const voteID = req.body.data;    
        for (let i = 0; i < votes.length; i++) {
            if (voteID === votes[i]) {
                console.log("Vote ID already exists.");
                res.json("NOT UNIQUE");
            }
        }
        votes.push(voteID);
        console.log("New vote added.");
        res.json("VALID");
    } catch (error) {
        console.log("Error creating new vote: " + error);
        res.json("INVALID");
    }
});

app.post("/api/validate-vote-id", async (req, res) => {

    try {
        const voteName = req.body.data;
        for (let i = 0; i < votes.length; i++) {
            if (voteName === votes[i]) {
                console.log("Vote ID found.");
                res.json("VALID");
            }
        }
        console.log("No vote found.");
        res.json("Address Unknown.");
    } catch (error) {
        console.log("Error finding vote id: " + error);
        res.json("INVALID");
    }
});

app.post("/api/remove-vote", async (req, res) => {

    try {
        const voteName = req.body.data;
        for (let i = 0; i < votes.length; i++) {
            if (voteName === votes[i]) {
                votes.splice(i,i);
                res.json("VALID");
            }
        }
        console.log("Unable to remove vote id: " + voteName);
        res.json("NOT DELETED");
    } catch (error) {
        console.log("Error removing vote id: " + error);
        res.json("INVALID");
    }
});

app.post("/api/cast-vote", async (req, res) => {

    try {
        const { voteID, name, vote } = req.body;
        console.log("Name: " + name + " voted " + vote + " in " + voteID);
        res.json("VALID");
    } catch (error) {
        res.json("INVALID");
    }
});

app.listen(5000,() => {console.log("Server started on port 5000")});