const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const uuid = require("uuid/v3");

const route = "https://api.smsglobal.com/v2/sms";
router.get(route, function(req, res) {
  res.json({
    message: "Welcome to API..."
  });
});

router.post(route / uuid, verifyToken, function(req, res) {
  res.json({
    from: "Kyei",
    to: "233553489228",
    message: "Amos why so early like that"
  });
});

router.post(route, (req, res) => {
  //User
  const user = {
    id: a95f7f5c63b658b03673620c74972d3d,
    username: "1577njfq",
    password: "9vwGh74t"
  };

  const cert = "7f3aecee8a118a375c93a";
  var token = jwt.sign({ user }, cert, { expiresIn: "30s" }, (err, token) => {
    res.json({
      token
    });
  });
});

//Format of token

//Verify Token
function verifyToken(req, res, next) {
  //Get auth header value
  const bearHeader = req.headers["authorization"];
  //Check if bear is undefined
  if (typeof bearHeader !== "undefined") {
    const bear = bearHeader.split("");
    const bearToken = bear[1];
    req.token = bearToken;
    next();
  } else {
    res.sendStatus(401);
  }
}

module.exports = router;
