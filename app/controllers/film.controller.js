const db = require("../models");
const Film = db.films;
const Op = db.Sequelize.Op;


// Retrieve all films from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Film.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving films."
      });
    });
  
};


exports.findGenre = (req, res) => {
  const genre = req.query.genre;
var condition = genre ? { genre: { [Op.like]: `%${genre}%` } } : null;

  Film.findAll({ where: condition })
    .then(data => {
     res.send(data);
    })
    .catch(err => {
      res.status(500).send({
       message:
          err.message || "Some error occurred while retrieving films."
      });
    });

};

