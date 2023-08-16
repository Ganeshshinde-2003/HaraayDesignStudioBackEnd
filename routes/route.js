const express = require("express");
const Candidate = require("../modules/candidate");
const router = express.Router();

router.post("/api/application", async (req, res) => {
    try {
        
        const {firstName, lastName, email, number, resume, portfolio, description} = req.body;

        let candidate = new Candidate({
            firstName,
            lastName,
            email,
            number,
            resume,
            portfolio,
            description,
        })

        user = await candidate.save();
        res.status(200).json({msg: "Succesfully submitted"})

    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = router;