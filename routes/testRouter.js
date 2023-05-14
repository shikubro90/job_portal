import {testPostController} from "../controllers/testController.js"

import express from "express"

const router = express.Router();

router.post("/test", testPostController)