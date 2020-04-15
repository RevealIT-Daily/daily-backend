module.exports = {
    HOST: "127.0.0.1",
    USER: "daily",
    PASSWORD: "$3!.aQ1#%.s1#!",
    DB: "dailyDev",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};