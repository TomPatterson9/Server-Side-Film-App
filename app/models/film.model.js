module.exports = (sequelize, Sequelize) => {
  const Film = sequelize.define("film", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    platform: {
      type: Sequelize.STRING
    },
    genre: {
      type: Sequelize.STRING
    }
  });

  return Film;
};