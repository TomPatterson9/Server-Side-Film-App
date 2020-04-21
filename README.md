# Server-Side-Film-App
Serverside application for the Film App




Also requires app/config/db.config.js


module.exports = {
    HOST: "",
    USER: "",
    PASSWORD: "",
    DB: "",
    dialect: "mysql",
    pool: {
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
};
