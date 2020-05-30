const controller = {
    index: (req, res) => {
        res.render("home", {color: req.color});
    },
    queColorEs: (req, res) => {
        res.render("queColor", {color: req.color});
    },
    color: (req, res) => {
        console.log(req.body.color)
        req.session.color = req.body.color;
        console.log(req.session.color)
        if(req.body.recordar){
            res.cookie("color", req.body.color, { maxAge: 120000});
        }
        res.redirect("/queColorEs")
    },
    borrar: (req, res) => {
        req.session.color = null;
        res.cookie('color', null, { maxAge: -1});
        res.send("Borrado");
    }
};
module.exports = controller;