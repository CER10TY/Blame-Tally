const express = require("express");
const app = express();
const router = express.Router();
const parse = require("../services/tallyParsing.js");
const bodyParser = require("body-parser");


let tallyParser = new parse(__dirname + "/../json/blame-tally.json");

router.use(bodyParser.json());

router.route("/list") 
    .get(function(req, res) {
        res.send(tallyParser.getTallies());
    })
    .post(function(req, res) {
        res.send(tallyParser.addTally(req.body));
    })

module.exports = router;