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
app.listen(5000,() => {console.log("Server started on port 5000")});