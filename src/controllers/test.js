const express = require("express");
const router = express.Router();
// const {pythonShell} = require('python-shell')

let {PythonShell} = require('python-shell')

const testServer = require("../services/testService.js");


router.get("/api/test", (req, res) => {
    testServer.executeTerminal('dir').then(result => {
        res.json(result)
    }).catch(err => {
        console.log(err);
    });
});

router.get("/api/test_node", (req, res) => {
    testServer.executeTerminal('node -v').then(result => {
        res.json(result)
    }).catch(err => {
        console.log(err);
    });
});

router.get("/api/test_py", (req, res) => {
    let options = {
        mode: 'text',
        pythonOptions: ['-u'], 
        args: ['2']
      };

    PythonShell.run('C:/Users/wmancera/Documents/trainning/api-strauss-nodejs/src/testPython/python.py', options, (err, result) => {
        if (err) throw err;
        console.log(result);
    });

    res.json({mensaje:'esperando'})
});

module.exports = router;