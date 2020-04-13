module.exports = {
    HOST: "74.208.169.91",
    USER: "postgres",
    PASSWORD: "root123",
    DB: "daily-dev",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};