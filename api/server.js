const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');


// express routers
const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');
const recipesRouter = require('../recipes/recipes-router.js');
const categoriesRouter = require('../categories/categories-router')

// server object
const server = express();

// global middleware
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(cookieParser());

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);
server.use('/api/recipes', recipesRouter);
server.use('/api/categories', categoriesRouter)

server.get("/", (req, res, next) => {
    res.json({
        message: "This is the Secret Family Recipes API",
    })
})

module.exports = server;