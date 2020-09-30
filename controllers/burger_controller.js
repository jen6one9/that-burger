var router = require("express").Router()
var db = require("../db/db.json")
var fs = require("fs")
const { maxHeaderSize } = require("http")



router = require("express").Router();
router.get("/api/burger_name", function (req, res) { //Should read the db file and return all hamburgers
    db = JSON.parse(fs.readfilesync("./db.json", "utf8"))  //utf8 means reads in english format
    console.log("get route", db)
    res.json(db)
})
router.post("/api/burger_name", function (req, res) { //Should receive a new hamburger to save on the request body, add it to the db.json file, and then return the new note to the client.
    var data = {
        id: Math.floor(Math.random() * 100),
        title: req.body.title,
        text: req.body.text
    }
    db.push(data)
    fs.writeFileSync("../db/db.json", JSON.stringify(db), function () {
        console.log("File Updated")
        console.log("post route", db)
        res.json(db)
    })

})

router.delete("/api/devour/:id", function (req, res) { //Should receive a query parameter containing the id of a burger to devour. 
    db = JSON.parse(fs.readfilesync("./db.json", "utf8"))  //utf8 means reads in english format
    console.log("delete route", db)
    res.json(db)
    fs.writeFile(path.join(__dirname, "./db/db.json"), JSON.stringify(db), function (err) {
        if (err) console.log(err);

        console.log("delete note");
    })

    console.log(notes);
    res.send("DELETE Request Called")
})

module.exports = router //lowercase r for the var you create

//this page is where we manipulate the data (data-handling)

