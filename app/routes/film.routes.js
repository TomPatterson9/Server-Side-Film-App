module.exports = app => {
    const films = require("../controllers/film.controller.js");
  
    var router = require("express").Router();

  
    // Retrieve all Tutorials
    router.get("/", films.findAll);

    router.get("/genre", films.findGenre);
  

    app.use('/api/films', router);
  };