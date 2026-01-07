const express = require('express');
const app = express();

let votes = [];
app.use(express.json());

app.post("/api/create-new-vote", async (req, res) => {

    try {
        const voteID = req.body.data;
        if (voteID === "CLOSED" || voteID === "") {
            res.json("Invalid, keyword used or null.");
            return;
        }
        for (let i = 0; i < votes.length; i++) {
            if (voteID === votes[i].subject) {
                console.log("Vote ID already exists.");
                res.json("NOT UNIQUE");
            }
        }
        votes.push({
            subject: voteID,
            votes: {}
        });
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
        if (voteName === "") {
            res.json("No vote name entered.");
            return;
        }
        for (let i = 0; i < votes.length; i++) {
            if (voteName === votes[i].subject) {
                console.log("Vote ID found.");
                res.json("VALID");
                return;
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
            if (voteName === votes[i].subject) {
                votes[i].subject = "CLOSED";
                res.json("VALID");
                return;
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
        for (let i = 0; i < votes.length; i++) {
            if (votes[i].subject === voteID) {
                votes[i].votes[name] = vote;
                res.json("VALID");
                return;
            }
        }
        res.json("NO VOTE FOUND");
    } catch (error) {
        res.json("INVALID");
    }
});

app.post("/api/reopen-vote", async (req, res) => {

    try {
        const voteID = req.body.data;
        console.log("Reopen vote" + voteID);
        for (let i = 0; i < votes.length; i++) {
            if (votes[i].subject === voteID) {
                votes[i].votes = {};
                res.json("VALID");
                return;
            }
        }
        
    } catch (error) {
        res.json("INVALID");
    }
});

app.post("/api/get-votes", async (req, res) => {

    try {
        const voteName = req.body.data;
        console.log("Fetching votes for " + voteName);
        for (let i = 0; i < votes.length; i++) {
            if (votes[i].subject === voteName) {
                res.json(votes[i].votes);
                return;
            }
        }
        
    } catch (error) {
        res.json("INVALID");
    }
});


app.listen(5000,() => {console.log("Server started on port 5000")});