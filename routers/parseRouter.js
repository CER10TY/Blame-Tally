const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const router = express.Router();
const parse = require("../services/jsonParsing.js");

let jsonParser = new parse();

router.route("/list") 
    .get(function(req, res) {
        res.send(jsonParser._getJSONArg(req.get(arg)))
    });

router.route("/user")
    .get(function(req, res){
        res.send(jsonParser._getJSONArg('/'))
    });

router.route("/writejsonarg")
    .put(function(req, res) {
        jsonParser._writeJSONArg(req.get(arg));
        res.send("/writejsonarg: written " + req.get(arg));
    })

module.exports = router;