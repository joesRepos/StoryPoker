const express = require('express');
const app = express();

let votes = [];
app.use(express.json());

app.post("/api/create-new-vote", async (req, res) => {

    try {
        const voteName = req.body.data;
        votes.push(voteName);
        console.log("New vote added.");
        res.json("VALID");
    } catch (error) {
        console.log("Error creating new vote: " + error);
        res.json("INVALID");
    }
});

app.post("/api/get-vote-id", async (req, res) => {

    try {
        const voteName = req.body.data;
        for (let i = 0; i < votes.length; i++) {
            if (voteName === votes[i]) {
                console.log("Vote ID found.")
                res.json(i);
            }
        }
        console.log("No vote found.");
        res.json("Address Unknown.");
    } catch (error) {
        console.log("Error finding vote id: " + error);
        res.json("INVALID");
    }
});

app.post("/api/get-vote-name", async (req, res) => {

    try {
        const voteID = req.body.data;
        if (voteID < votes.length) {
            console.log("Vote Name found.")
            res.json(votes[voteID]);
        }
        console.log("No vote found.");
        res.json("Address Unknown.");
    } catch (error) {
        console.log("Error finding vote name: " + error);
        res.json("INVALID");
    }
});

app.listen(5000,() => {console.log("Server started on port 5000")});