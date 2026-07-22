# task-manger
This repo contains the project information about the frontend, backend, database and all its connectivity.

Process steps:

Frontend - svelvekit
Backend - node.js
Database - mongodbatlas

first step: 

create a repository

    Task-manager - README.md file


Frontend Implemantation
=======================
    
    cmd: 

    npx sv create task-manager-frontend

    It will creates  the task-manager-frontend directory with all the packages inside it like

        |-src
        |-static
        |-svelte-config.js
        |-vite.config.js
        |-package.json
        |-README.md

    cd task-manager-frontend

        npm install -----------> install all the dependencies

        npm run dev -----------> access at [http://localhost:5173], [http://localhost:5175] ...etc

    Usually frontend will be runing on as per the SCRIPT - mentioned in package.json file 

    like: 
        npm run dev
        npm run build
        npm run preview
        npm run prepare 
        npm run check
        npm run watch ....etc as per script in package.json

    Therefore Frontend server will be running on ports - 5173, 5175 etc 

    Confirmation:  
        Open Browser localhost: 5173 ----> Hit Enter ---> Page Opens.



Backend Implementation
======================

    mkdir task-service && cd task-service

    npm init -y
    npm install express mongoose cors


    Basic server: 
        index.js

        const express = require("express");
        const mongoose = require("mongoose");
        const app = express();

        app.use(express.json());

        // Root route for health check
        app.get("/", (req, res) => {
            res.send("Backend is alive!");
        });

        // Example route
        app.get("/tasks", (req, res) => {
            res.json([{ id: 1, title: "Learn Svelte" }]);
        });

        app.listen(5000, () => console.log("Task Service running on 5000"));


    run: 

        node index.js
    
    Therefore running this command will get an output of [ http://localhost:5000 ]  or else Task service running on 5000

    Open browser check http://localhost:5000 

        as per index.js - need to get as " Backend is alive " on browser


    Above concepts are completely basic and related to frontend and backend hosting indvidually.

 ===========================================================================


Connection of Frontend and Backend
==================================


