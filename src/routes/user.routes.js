import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import { getUser, getUsers } from "../controllers/user.controller.js";
//import {getStudies, getStudy, createStudy, updateStudy, deleteStudy} from '../controllers/study.controller.js'
import {validateSchema} from '../middlewares/validator.middleware.js';
import { createStudySchema } from "../schemas/study.schema.js";

const router = Router();

router.get('/user', authRequired, getUsers);

router.get('/user/:id', authRequired, getUser);

//router.post('/studies', authRequired, validateSchema(createStudySchema), createStudy);

//router.delete('/studies/:id', authRequired, deleteStudy);

//router.put('/studies/:id', authRequired, updateStudy);

export default router;